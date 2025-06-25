"use client";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo, useState } from 'react';
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

type UserTraining = {
  id: string; 
  trainingCategory: string;
  trainingTitle: string;
  startDate: string;
  CEU: string;
  CEUTypes: string;
  CEUHours: string;
  length: string;
  mode: string;
  listofPreReqs: string;
  trainers: string; 
};

const UserTrainings = () => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});


  const columns = useMemo<MRT_ColumnDef<UserTraining>[]>(() => [
    { accessorKey: 'trainingCategory', header: 'Category' },
    { accessorKey: 'trainingTitle', header: 'Title' },
    {
      accessorKey: 'startDate',
      header: 'Date',
      Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    { accessorKey: 'CEU', header: 'CEU' },
    { accessorKey: 'CEUTypes', header: 'CEU Types' },
    { accessorKey: 'CEUHours', header: 'CEU Hours' },
    { accessorKey: 'length', header: 'Length (minutes)' },
    { accessorKey: 'mode', header: 'Mode' },
    { accessorKey: 'listofPreReqs', header: 'List of Pre-Reqs' },
    { accessorKey: 'trainers', header: 'Trainers' },
  ], []);
  console.log(columns);
  //call CREATE hook
  const { mutateAsync: createTraining, isPending: isCreatingTraining } =
    useCreateTraining();
  //call READ hook
  const {
    data: fetchedTrainings = [],
    isError: isLoadingTrainingsError,
    isFetching: isFetchingTrainings,
    isLoading: isLoadingTrainings,
    ...rest
  } = useGetTrainings();
  //call UPDATE hook
  const { mutateAsync: updateTraining, isPending: isUpdatingTraining } =
    useUpdateTraining();
  //call DELETE hook
  const { mutateAsync: deleteTraining, isPending: isDeletingTraining } =
    useDeleteTraining();
  console.log('Columns:', columns);
  console.log('Fetched UserTrainings:', fetchedTrainings);
  //CREATE action
  const handleCreateTraining: MRT_TableOptions<UserTraining>['onCreatingRowSave'] = async ({
    values,
    exitCreatingMode,
  }) => {
    const newValidationErrors = validateTraining(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createTraining(values);
    exitCreatingMode();
  };

  //UPDATE action
  const handleSaveTraining: MRT_TableOptions<UserTraining>['onEditingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateTraining(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateTraining(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<UserTraining>) =>
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this training?',
      children: (
        <Text>
          Are you sure you want to delete {row.original.trainingTitle}? This action cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteTraining(row.original.id),
    });

  const table = useMantineReactTable({
    columns: columns ?? [], // Ensure columns are not undefined
    data: fetchedTrainings ?? [], // Ensure data is not undefined
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.id,
    mantineToolbarAlertBannerProps: isLoadingTrainingsError
      ? {
        color: 'red',
        children: 'Error loading data',
      }
      : undefined,
    mantineTableContainerProps: {
      style: {
        minHeight: '500px',
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateTraining,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveTraining,
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
      <Button
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //   }),
          // );
        }}
      >
        Create New Training
      </Button>
    ),
    state: {
      isLoading: isLoadingTrainings,
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
    mutationFn: async (training: UserTraining) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newTrainingInfo: UserTraining) => {
      queryClient.setQueryData(
        ['trainings'],
        (prevTrainings: any) =>
          [
            ...prevTrainings,
            {
              ...newTrainingInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as UserTraining[],
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), //refetch trainings after mutation, disabled for demo
  });
}

//READ hook (get trainings from api)
function useGetTrainings() {
  //   const auth = useAuth();
  return useQuery<UserTraining[]>({
    queryKey: ['trainings'],
    //     enabled: !!auth.user?.access_token,
    queryFn: async () => {
      //       const accessToken = auth.user?.access_token;
      //       if (!accessToken) throw new Error('No access token available');
      const response = await fetch('https://apidb.dev.micbc.micbc.org/trainings', {
        headers: {
          //           Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();

      return data.map((item: any) => ({
        id: item._id,
        trainingCategory: item.trainingCategory || '',
        trainingTitle: item.trainingTitle || '',
        startDate: item.startDate || '',
        CEU: item.CEU || '',
        CEUTypes: item.CEUTypes || '',
        CEUHours: item.CEUHours || '',
        length: item.length || '',
        mode: item.mode || '',
        listofPreReqs: item.listofPreReqs || '',
        trainers: Array.isArray(item.trainers) ? item.trainers.join(', ') : item.trainers || '',
      }));
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put training in api)
function useUpdateTraining() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (training: UserTraining) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newTrainingInfo: UserTraining) => {
      queryClient.setQueryData(['trainings'], (prevTrainings: any) =>
        prevTrainings?.map((prevTraining: UserTraining) =>
          prevTraining.id === newTrainingInfo.id ? newTrainingInfo : prevTraining,
        ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), //refetch trainings after mutation, disabled for demo
  });
}

//DELETE hook (delete training in api)
function useDeleteTraining() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (trainingId: string) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (trainingId: string) => {
      queryClient.setQueryData(['trainings'], (prevTrainings: any) =>
        prevTrainings?.filter((training: UserTraining) => training.id !== trainingId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), //refetch trainings after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const TableUserTrainings = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <UserTrainings />
    </ModalsProvider>
  </QueryClientProvider>
);

export default TableUserTrainings;

const validateRequired = (value: string) => !!value.length;

function validateTraining(training: UserTraining) {
  return {
    trainingTitle: !validateRequired(training.trainingTitle)
      ? 'Title is Required'
      : '',
  };
}

