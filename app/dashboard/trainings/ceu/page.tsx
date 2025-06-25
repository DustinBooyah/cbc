import { Title, Container, Space } from '@mantine/core';
import TableTrainingsCEU from '../../../(components)/Dashboard/Tables/TableTrainingsCEU';
// import TableTrainings from '../../(components)/Dashboard/Tables/TableTrainings';
// import { Suspense } from 'react';
// import Loading from '../../loading';

export default function DashTrainingsCEU() {
  return (

    <Container fluid>

      <Title order={1}>Trainings with CEUs</Title>
      <Space h="md" />
      <TableTrainingsCEU />
    </Container>

  );
}
