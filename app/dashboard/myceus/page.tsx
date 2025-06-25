import TableUserTrainings from '@/app/(components)/Dashboard/Tables/TableUserTrainings';
import { Title, Container, Space } from '@mantine/core';

export default function DashMyCEUs() {
  return (

    <Container fluid>

      <Title order={1}>My Trainings</Title>
      <Space h="md" />
      {/* <TableUsersRegistered/> */}
      <TableUserTrainings/>
    </Container>

  );
}
