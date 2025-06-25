import { DashboardCatalog } from '@/app/(components)/Dashboard/Catalog/Catalog';
import { Title, Container, Space } from '@mantine/core';
// import { Suspense } from 'react';
// import Loading from '../../loading';


export default function DashCatalog() {
  return (

    <Container fluid>

      <Title order={1}>Catalog</Title>
      <Space h="md" />
    <DashboardCatalog/>
    </Container>

  );
}
