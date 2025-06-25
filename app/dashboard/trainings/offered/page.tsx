import { Title, Container, Space } from '@mantine/core';
import TableTrainings from '@/app/(components)/Dashboard/Tables/TableTrainings';

export default function DashTrainingsOffered() {
  return (

    <Container fluid>

      <Title order={1}>Trainings Offered</Title>
      <Space h="md" />
      <TableTrainings/>
    </Container>

  );
}
