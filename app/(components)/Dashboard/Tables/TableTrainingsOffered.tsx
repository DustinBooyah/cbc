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
import { useAuth } from 'react-oidc-context';

type Training = {
  id: string;
  title: string;
  peopleEnrolled: string[];
  peopleAttended: string[];
  completions: string[];
  category: string;
  objectives: string[];
};

const TrainingsOffered = () => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});

  const columns = useMemo<MRT_ColumnDef<Training>[]>(() => [
    {
      accessorKey: 'category',
      header: 'Title',
      enableEditing: true,
    },
    {
      accessorKey: 'title',
      header: 'Category',
      enableEditing: false,
    },
    {
      accessorKey: 'peopleEnrolled',
      header: 'Date Offered',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleEnrolled',
      header: 'Length',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleEnrolled',
      header: 'Mode',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleEnrolled',
      header: 'Trainers',
      enableEditing: false,
    },
    {
      accessorKey: 'peopleAttended',
      header: 'Pre-requisites',
      enableEditing: false,
    }
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
    console.log('Fetched Trainings:', fetchedTrainings);
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
    await createTraining(values);
    exitCreatingMode();
  };

  //UPDATE action
  const handleSaveTraining: MRT_TableOptions<Training>['onEditingRowSave'] = async ({
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
  const openDeleteConfirmModal = (row: MRT_Row<Training>) =>
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this training?',
      children: (
        <Text>
          Are you sure you want to delete {row.original.title}? This action cannot be undone.
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
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
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
    mutationFn: async (training: Training) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
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
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), //refetch trainings after mutation, disabled for demo
  });
}

//READ hook (get trainings from api)
function useGetTrainings() {
  const auth = useAuth();
  const API_URL = String(process.env.NEXT_PUBLIC_API_URL);

  return useQuery<Training[]>({
    queryKey: ['trainings'],
    enabled: !!auth.user?.access_token, // only run query when token is available
    queryFn: async () => {
      const accessToken = auth.user?.access_token;

      if (!accessToken) throw new Error('No access token available');

      const response = await fetch(`${API_URL}/trainings`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();

      return data.map((item: any, index: number) => ({
        id: item.id || index.toString(),
        title: item.title || 'Unknown',
        peopleEnrolled: item.peopleEnrolled || [],
        peopleAttended: item.peopleAttended || [],
        completions: item.completions || [],
        category: item.category || 'Uncategorized',
        objectives: Array.isArray(item.objectives) ? item.objectives : [],
      }));
    },
    refetchOnWindowFocus: false,
  });
}
//UPDATE hook (put training in api)
function useUpdateTraining() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (training: Training) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newTrainingInfo: Training) => {
      queryClient.setQueryData(['trainings'], (prevTrainings: any) =>
        prevTrainings?.map((prevTraining: Training) =>
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
        prevTrainings?.filter((training: Training) => training.id !== trainingId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['trainings'] }), //refetch trainings after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const TableTrainingsOffered = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <TrainingsOffered />
    </ModalsProvider>
  </QueryClientProvider>
);

export default TableTrainingsOffered;

const validateRequired = (value: string) => !!value.length;

function validateTraining(training: Training) {
  return {
    firstName: !validateRequired(training.title)
      ? 'Title is Required'
      : '',
  };
}

