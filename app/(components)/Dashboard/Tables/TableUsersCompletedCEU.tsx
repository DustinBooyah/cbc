"use client";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; 
import 'mantine-react-table/styles.css'; 
import { useMemo, useState } from 'react';
import {
  MRT_EditActionButtons,
  MantineReactTable,
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

type User = {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  providerName: string;
  providerAddress: string;
  providerCity: string;
  providerState: string;
  organizationZipCode: string;
  MichiCANSCertificationAchieved: string;
  recertificationDate: string;
};

const UsersCompletedCEU = () => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});

  const columns = useMemo<MRT_ColumnDef<User>[]>(() => [
   {
      accessorKey: 'firstName',
      header: 'First Name',
      enableEditing: true,
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
      enableEditing: false,
    },
    {
      accessorKey: 'emailAddress',
      header: 'Email',
      enableEditing: false,
    },
    {
      accessorKey: 'providerName',
      header: 'Provider Type',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleEnrolled',
      header: 'Psychology CEU Credits',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleEnrolled',
      header: 'Social Work CEU Credits',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleAttended',
      header: 'CTDS Hours',
      enableEditing: false,
    },
  ], []);

  const { mutateAsync: createUser, isPending: isCreatingUser } = useCreateUser();
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  const { mutateAsync: updateUser, isPending: isUpdatingUser } = useUpdateUser();
  const { mutateAsync: deleteUser, isPending: isDeletingUser } = useDeleteUser();

  // Permanently filter users with a recertificationDate
  const filteredUsers = useMemo(() => {
    return fetchedUsers.filter(user => user.recertificationDate && user.recertificationDate.trim() !== '');
  }, [fetchedUsers]);

  const handleCreateUser: MRT_TableOptions<User>['onCreatingRowSave'] = async ({
    values,
    exitCreatingMode,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    exitCreatingMode();
  };

  const handleSaveUser: MRT_TableOptions<User>['onEditingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null);
  };

  const openDeleteConfirmModal = (row: MRT_Row<User>) =>
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this user?',
      children: (
        <Text>
          Are you sure you want to delete {row.original.firstName} {row.original.lastName}? This action cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteUser(row.original.id),
    });

  const table = useMantineReactTable({
    columns,
    data: filteredUsers, // <- use filtered users here
    createDisplayMode: 'modal',
    editDisplayMode: 'modal',
    enableEditing: true,
    getRowId: (row) => row.id,
    mantineToolbarAlertBannerProps: isLoadingUsersError
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
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    renderCreateRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Create New User</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Edit User</Title>
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
      <Button onClick={() => table.setCreatingRow(true)}>
        Create New User
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MantineReactTable table={table} />;
};

function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: any) => [
          ...prevUsers,
          { ...newUserInfo, id: (Math.random() + 1).toString(36).substring(7) },
        ] as User[],
      );
    },
  });
}

function useGetUsers() {
  const API_URL = String(process.env.NEXT_PUBLIC_API_URL);
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/users`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();
      return data.map((item: any) => ({
        id: item._id,
        firstName: item.firstName || '',
        lastName: item.lastName || '',
        emailAddress: item.emailAddress || '',
        providerName: item.providerName || '',
        providerAddress: item.providerAddress || '',
        providerCity: item.providerCity || 'Uncategorized',
        providerState: item.providerState || '',
        organizationZipCode: item.organizationZipCode || '',
        MichiCANSCertificationAchieved: item.lastMichiCANSCertificationAchievedName || '',
        recertificationDate: item.recertificationDate || '',
      }));
    },
    refetchOnWindowFocus: false,
  });
}

function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.map((prevUser: User) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
        ),
      );
    },
  });
}

function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    onMutate: (userId: string) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.filter((user: User) => user.id !== userId),
      );
    },
  });
}

const queryClient = new QueryClient();

const TableUsersCompletedCEU = () => (
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <UsersCompletedCEU />
    </ModalsProvider>
  </QueryClientProvider>
);

export default TableUsersCompletedCEU;

const validateRequired = (value: string) => !!value.length;

function validateUser(user: User) {
  return {
    firstName: !validateRequired(user.firstName) ? 'Name is Required' : '',
  };
}
