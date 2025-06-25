import { Title, Container, Space } from '@mantine/core';
import TableUsersEnrolled from '../../../(components)/Dashboard/Tables/TableUsersEnrolled';
import TableUsersCompletedCEU from '../../../(components)/Dashboard/Tables/TableUsersCompletedCEU';
// import { Suspense } from 'react';
// import Loading from '../../../loading';


export default function DashUsersEnrolled() {
    return (

        <Container fluid>

            <Title order={1}>Users Completed CEU</Title>
            <Space h="md" />
            <TableUsersCompletedCEU/>
        </Container>

    );
}
