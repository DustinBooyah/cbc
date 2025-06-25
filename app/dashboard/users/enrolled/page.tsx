import { Title, Container, Space } from '@mantine/core';
import TableUsersEnrolled from '../../../(components)/Dashboard/Tables/TableUsersEnrolled';
// import { Suspense } from 'react';
// import Loading from '../../../loading';


export default function DashUsersEnrolled() {
    return (

        <Container fluid>

            <Title order={1}>Users Enrolled</Title>
            <Space h="md" />
            <TableUsersEnrolled />
        </Container>

    );
}
