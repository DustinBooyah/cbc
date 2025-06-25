import TableTrainingsReport from '@/app/(components)/Dashboard/Tables/TableTrainingsReport';
import { Title, Container, Space } from '@mantine/core';
// import { Suspense } from 'react';
// import Loading from '../../loading';


export default function DashReport() {
  return (

    <Container fluid>

      <Title order={1}>Reports</Title>
      <Space h="md" />
      <TableTrainingsReport/>
    </Container>

  );
}
