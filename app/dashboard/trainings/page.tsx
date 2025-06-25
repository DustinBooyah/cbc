import { Title, Container, Space } from '@mantine/core';
import TableTrainings from '../../(components)/Dashboard/Tables/TableTrainings';
// import { Suspense } from 'react';
// import Loading from '../../loading';

export default function DashTrainings() {
  return (

    <Container fluid>

      <Title order={1}>Trainings</Title>
      <Space h="md" />
      <TableTrainings />
    </Container>

  );
}
