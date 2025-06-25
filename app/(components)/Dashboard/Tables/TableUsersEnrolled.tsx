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

const UsersEnrolled = () => {
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
      header: 'Training Title',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleEnrolled',
      header: 'Date Enrolled',
      enableEditing: false,
    },
    {
      // accessorKey: 'peopleAttended',
      header: 'Date Completed',
      enableEditing: false,
    },



    // {
    //   accessorKey: 'firstName',
    //   header: 'First Name',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'lastName',
    //   header: 'Last Name',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'emailAddress',
    //   header: 'Email Address',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'providerName',
    //   header: 'Provider Name',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'providerAddress',
    //   header: 'Provider Address',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'providerCity',
    //   header: 'Provider City',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'providerState',
    //   header: 'Provider State',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'organizationZipCode',
    //   header: 'Zipcode for Org',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'MichiCANSCertificationAchieved',
    //   header: 'MichiCANS Certification Achieved',
    //   enableEditing: false,
    // },
    // {
    //   accessorKey: 'recertificationDate',
    //   header: 'Recertification Date',
    //   Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString('en-US', {
    //     month: 'long',
    //     day: 'numeric',
    //     year: 'numeric',
    //   }),
    //   enableEditing: false,
    // },
  ], []);
  console.log(columns);
  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [], 
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
    ...rest
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();
    console.log('Columns:', columns);
    console.log('Fetched Users:', fetchedUsers);
  //CREATE action
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

  //UPDATE action
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
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
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
    columns: columns ?? [], // Ensure columns are not undefined
    data: fetchedUsers ?? [], // Ensure data is not undefined
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
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

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: any) =>
          [
            ...prevUsers,
            {
              ...newUserInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as User[],
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  // const auth = useAuth();
  const API_URL = String(process.env.NEXT_PUBLIC_API_URL);

  return useQuery<User[]>({
    queryKey: ['users'],
    // enabled: !!auth.user?.access_token, // only run query when token is available
    queryFn: async () => {
      // const accessToken = auth.user?.access_token;

      // if (!accessToken) throw new Error('No access token available');

      const response = await fetch(`${API_URL}/users`, {
        headers: {
          // Authorization: `Bearer ${accessToken}`,
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
        emailAddress: item.emailAddress ||  '',
        providerName: item.providerName ||  '',
        providerAddress: item.providerAddress ||  '',
        providerCity: item.providerCity || 'Uncategorized',
        providerState: item.providerState ||  '',
        organizationZipCode: item.organizationZipCode ||  '',
        MichiCANSCertificationAchieved: item.lastMichiCANSCertificationAchievedName ||  '',
        recertificationDate: item.recertificationDate ||  '',
      }));
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.map((prevUser: User) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
        ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId: string) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.filter((user: User) => user.id !== userId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const TableUsersEnrolled = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <UsersEnrolled />
    </ModalsProvider>
  </QueryClientProvider>
);

export default TableUsersEnrolled;

const validateRequired = (value: string) => !!value.length;

function validateUser(user: User) {
  return {
    firstName: !validateRequired(user.firstName)
      ? 'Name is Required'
      : '',
  };
}

