"use client";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';
import { useMemo, useState, useEffect } from 'react';
import {
  MRT_EditActionButtons,
  MantineReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMantineReactTable,
} from 'mantine-react-table';
import {
  ActionIcon,
  Button,
  Flex,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { ModalsProvider, modals } from '@mantine/modals';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
// import { useAuth } from 'react-oidc-context';

type Training = {
  id: string;
  trainingCategory: string;
  trainingTitle: string;
  startDate: string;
  CEU: string;
  CEUTypes: string;
  CEUHours: string;
  length: string;
  mode: string;
  listofPreReqs: string[];
  trainers: string [];
  preReqs: string;
}; 

const Trainings = () => {
  const [showCEUYes, setShowCEUYes] = useState(false);
  const [showMichiCANS, setShowMichiCANS] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});
  // Track global loading state
  const [isLoading, setIsLoading] = useState(false);

  // Track error notifications
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Clear messages when component unmounts or after a timeout
  useEffect(() => {
    // Clear success message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);


  const columns = useMemo<MRT_ColumnDef<Training>[]>(() => [
    {
      accessorKey: 'trainingCategory',
      header: 'Category',
      mantineEditTextInputProps: {
        required: true,
        error: validationErrors?.trainingCategory,
        onFocus: () => setValidationErrors({
          ...validationErrors,
          trainingCategory: undefined,
        }),
      },
    },
    {
      accessorKey: 'trainingTitle',
      header: 'Title',
      mantineEditTextInputProps: {
        required: true,
        error: validationErrors?.trainingTitle,
        onFocus: () => setValidationErrors({
          ...validationErrors,
          trainingTitle: undefined,
        }),
      },
    },
    {
      accessorKey: 'startDate',
      header: 'Date',
      Cell: ({ cell }) => {
        try {
          return new Date(cell.getValue<string>()).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });
        } catch (error) {
          return 'Invalid Date';
        }
      },
      mantineEditTextInputProps: {
        required: true,
        type: 'date',
        error: validationErrors?.startDate,
        onFocus: () => setValidationErrors({
          ...validationErrors,
          startDate: undefined,
        }),
      },
    },
    // { accessorKey: 'startDate', header: 'Date' },

    {
      accessorKey: 'CEU',
      header: 'CEU',
      editVariant: 'select',
      mantineEditSelectProps: {
        data: ['Yes', 'No'],
      },
    },
    { accessorKey: 'CEUTypes', header: 'CEU Types' },
    { accessorKey: 'CEUHours', header: 'CEU Hours' },
    {
      accessorKey: 'length',
      header: 'Length (minutes)',
      mantineEditTextInputProps: {
        type: 'number',
      },
    },
    {
      accessorKey: 'mode',
      header: 'Mode',
      editVariant: 'select',
      mantineEditSelectProps: {
        data: ['In-Person', 'Online', 'Hybrid'],
      },
    },
    { accessorKey: 'listofPreReqs', header: 'List of Pre-Reqs' },
    { accessorKey: 'trainers', header: 'Trainers' },
  ], [validationErrors]);
  // console.log(columns);
  //call CREATE hook
  const { mutateAsync: createTraining, isPending: isCreatingTraining } =
    useCreateTraining();
  //call READ hook
  const {
    data: fetchedTrainings = [],
    isError: isLoadingTrainingsError,
    isFetching: isFetchingTrainings,
    isLoading: isLoadingTrainings,
  } = useGetTrainings();
  const filteredTrainings = useMemo(() => {
    let data = fetchedTrainings;
    if (showCEUYes) {
      data = data.filter((t) => t.CEU === 'Yes');
    }
    if (showMichiCANS) {
      // assuming CEUTypes contains the word "MichiCANS" when that certification is achieved
      data = data.filter((t) => t.CEUTypes.includes('MichiCANS'));
    }
    return data;
  }, [fetchedTrainings, showCEUYes, showMichiCANS]);

  //call UPDATE hook
  const { mutateAsync: updateTraining, isPending: isUpdatingTraining } =
    useUpdateTraining();
  //call DELETE hook
  const { mutateAsync: deleteTraining, isPending: isDeletingTraining } =
    useDeleteTraining();
  // console.log('Columns:', columns);
  // console.log('Fetched Trainings:', fetchedTrainings);
  //CREATE action
  const handleCreateTraining: MRT_TableOptions<Training>['onCreatingRowSave'] = async ({
    values,
    exitCreatingMode,
  }) => {
    const newValidationErrors = validateTraining(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    setErrorMessage('');
    setIsLoading(true);
    try {
      await createTraining(values);
      setSuccessMessage('Training created successfully');
      exitCreatingMode();
    } catch (error) {
      setErrorMessage('Failed to create training. Please try again.');
      console.error('Create training error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  //UPDATE action
  const handleSaveTraining: MRT_TableOptions<Training>['onEditingRowSave'] = async ({
    values,
    table,
    row,
  }) => {
    const newValidationErrors = validateTraining(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    setErrorMessage('');
    setIsLoading(true);
    try {
      // Ensure ID is included in the values
      const updatedValues = {
        ...values,
        id: row.original.id, // Make sure to include the original row's ID
      };
      // console.log('Updating training with values:', updatedValues);
      await updateTraining(updatedValues);
      setSuccessMessage('Training updated successfully');
      table.setEditingRow(null); //exit editing mode
    } catch (error) {
      setErrorMessage('Failed to update training. Please try again.');
      console.error('Update training error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<Training>) =>
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this training?',
      children: (
        <Text>
          Are you sure you want to delete {row.original.trainingTitle}? This action cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: async () => {
        setErrorMessage('');
        setIsLoading(true);
        try {
          await deleteTraining(row.original.id);
          setSuccessMessage('Training deleted successfully');
        } catch (error) {
          setErrorMessage('Failed to delete training. Please try again.');
          console.error('Delete training error:', error);
        } finally {
          setIsLoading(false);
        }
      },
    });

    const table = useMantineReactTable({
      columns,
      data: filteredTrainings,
      createDisplayMode: 'modal',
      editDisplayMode: 'modal',
      enableEditing: true,
      getRowId: (row) => row.id,
      mantineToolbarAlertBannerProps: isLoadingTrainingsError
        ? { color: 'red', children: 'Error loading data' }
        : undefined,
      mantineTableContainerProps: { style: { minHeight: '500px' } },
      onCreatingRowCancel: () => {
        setValidationErrors({});
        setErrorMessage('');
      },
      onCreatingRowSave: handleCreateTraining,
      onEditingRowCancel: () => {
        setValidationErrors({});
        setErrorMessage('');
      },
      onEditingRowSave: handleSaveTraining,
      enableRowActions: true,
      
    renderCreateRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Create New Training</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Edit Training</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderRowActions: ({ row, table }) => (
      <Flex gap="md">
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)}>
            <IconEdit />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete">
          <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
            <IconTrash />
          </ActionIcon>
        </Tooltip>
      </Flex>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Flex direction="column" w="100%">
        {errorMessage && (
          <Text color="red" mb="sm" fw={500}>{errorMessage}</Text>
        )}
        {successMessage && (
          <Text color="green" mb="sm" fw={500}>{successMessage}</Text>
        )}
        <Flex gap="sm" align="center">
          {/* <Button
            variant={showCEUYes ? 'filled' : 'outline'}
            onClick={() => {
              setSuccessMessage('');
              setShowCEUYes((prev) => !prev);
            }}
          >
            {showCEUYes ? 'Clear CEU "Yes"' : 'Filter CEU "Yes"'}
          </Button>
          <Button
            variant={showMichiCANS ? 'filled' : 'outline'}
            onClick={() => {
              setSuccessMessage('');
              setShowMichiCANS((prev) => !prev);
            }}
          >
            {showMichiCANS ? 'Clear MichiCANS' : 'Filter MichiCANS'}
          </Button> */}
          <Button
            onClick={() => {
              setSuccessMessage('');
              setErrorMessage('');
              table.setCreatingRow(true);
            }}
            loading={isLoading}
            disabled={isLoading}
          >
            Create New Training
          </Button>
        </Flex>
      </Flex>
    ),
    state: {
      isLoading: isLoadingTrainings || isLoading,
      isSaving: isCreatingTraining || isUpdatingTraining || isDeletingTraining,
      showAlertBanner: isLoadingTrainingsError,
      showProgressBars: isFetchingTrainings,
    },
  });

  return <MantineReactTable table={table} />;
};

//CREATE hook (post new training to api)
function useCreateTraining() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (training: Training) => {
      const response = await fetch('https://apidb.dev.micbc.micbc.org/trainings/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trainingCategory: training.trainingCategory,
          trainingTitle: training.trainingTitle,
          length: training.length,
          mode: training.mode,
          trainers: training.trainers,
          CEU: training.CEU,
          CEUTypes: training.CEUTypes,
          CEUHours: training.CEUHours,
          preReqs: training.preReqs,
          listofPreReqs: training.listofPreReqs,
          startDate: training.startDate,
          id: training.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create training');
      }

      return await response.json();
    },
    //client side optimistic update
    onMutate: (newTrainingInfo: Training) => {
      queryClient.setQueryData(
        ['trainings'],
        (prevTrainings: any) =>
          [
            ...prevTrainings,
            {
              ...newTrainingInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as Training[],
      );
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), // Refetch trainings after mutation
  });
}

//READ hook (get trainings from api)
function useGetTrainings() {
  // Uncomment when authentication is enabled again
  // const auth = useAuth();
  return useQuery<Training[]>({
    queryKey: ['trainings'],
    // enabled: !!auth.user?.access_token,
    queryFn: async () => {
      // Uncomment when authentication is enabled again
      // const accessToken = auth.user?.access_token;
      // if (!accessToken) throw new Error('No access token available');

      // Clear any existing success/error messages
      // This would require state lifting if we had access to the state setters here

      try {
        const response = await fetch('https://apidb.dev.micbc.micbc.org/trainings', {
          headers: {
            // Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API error:', errorText);
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data.map((item: any) => ({
          id: item.id,
          trainingCategory: item.trainingCategory || '',
          trainingTitle: item.trainingTitle || '',
          startDate: item.startDate || '',
          CEU: item.CEU || '',
          CEUTypes: item.CEUTypes || '',
          CEUHours: item.CEUHours || '',
          length: item.length || '',
          mode: item.mode || '',
          preReqs: item.preReqs || '',
          listofPreReqs: item.listofPreReqs || '',
          trainers: Array.isArray(item.trainers) ? item.trainers.join(', ') : item.trainers || '',
        }));
      } catch (error) {
        console.error('Error fetching trainings:', error);
        throw error;
      }
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

//UPDATE hook (put training in api)
function useUpdateTraining() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (training: Training) => {
            // console.log('Training object being sent to API:', training);

      if (!training.id) {
        console.error('Training ID is missing in the update request');
        throw new Error('Training ID is missing');
      }

      const response = await fetch(`https://apidb.dev.micbc.micbc.org/trainings/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: training.id,
          trainingCategory: training.trainingCategory,
          trainingTitle: training.trainingTitle,
          length: training.length,
          mode: training.mode,
          trainers: training.trainers,
          CEU: training.CEU,
          CEUTypes: training.CEUTypes,
          CEUHours: training.CEUHours,
          preReqs: training.preReqs,
          listofPreReqs: training.listofPreReqs,
          startDate: training.startDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update training');
      }

      return await response.json();
    },
    //client side optimistic update
    onMutate: (newTrainingInfo: Training) => {
      queryClient.setQueryData(['trainings'], (prevTrainings: any) =>
        prevTrainings?.map((prevTraining: Training) =>
          prevTraining.id === newTrainingInfo.id ? newTrainingInfo : prevTraining,
        ),
      );
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), // Refetch trainings after mutation
  });
}

//DELETE hook (delete training in api)
function useDeleteTraining() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (trainingId: string) => {
      const response = await fetch(`https://apidb.dev.micbc.micbc.org/trainings`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: trainingId
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete training');
      }

      return await response.json();
    },
    //client side optimistic update
    onMutate: (trainingId: string) => {
      queryClient.setQueryData(['trainings'], (prevTrainings: any) =>
        prevTrainings?.filter((training: Training) => training.id !== trainingId),
      );
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), // Refetch trainings after mutation
  });
}

const queryClient = new QueryClient();

const TableTrainings = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <Trainings />
    </ModalsProvider>
  </QueryClientProvider>
);

export default TableTrainings;

const validateRequired = (value: string) => !!value.length;

function validateTraining(training: Training) {
  const errors: Record<string, string> = {};

  // Required field validations
  if (!validateRequired(training.trainingTitle)) {
    errors.trainingTitle = 'Title is Required';
  }

  if (!validateRequired(training.trainingCategory)) {
    errors.trainingCategory = 'Category is Required';
  }

  if (!validateRequired(training.startDate)) {
    errors.startDate = 'Start Date is Required';
  }

  // Date validation
  if (training.startDate) {
    try {
      const date = new Date(training.startDate);
      if (isNaN(date.getTime())) {
        errors.startDate = 'Invalid date format';
      }
    } catch (e) {
      errors.startDate = 'Invalid date format';
    }
  }

  // Numeric field validations
  if (training.CEUHours && isNaN(Number(training.CEUHours))) {
    errors.CEUHours = 'CEU Hours must be a number';
  }

  if (training.length && isNaN(Number(training.length))) {
    errors.length = 'Length must be a number';
  }

  return errors;
}

