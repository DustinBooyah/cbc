import { Title, Container, Space } from '@mantine/core';
// import { Suspense } from 'react';
// import Loading from '../../../loading';
import TableUsersRegistered from '../../../(components)/Dashboard/Tables/TableUsersRegistered';


export default function DashUsersRegistered() {
    return (

        // <Suspense fallback={<Loading/>}>
        <Container fluid>
            <Title order={1}>Users Registered</Title>

            <Space h="md" />
            <TableUsersRegistered />
        </Container>


        // </Suspense>

    );
}
