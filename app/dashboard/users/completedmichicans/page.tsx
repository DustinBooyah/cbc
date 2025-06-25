import { Title, Container, Space } from '@mantine/core';
import TableUsersCompletedCans from '../../../(components)/Dashboard/Tables/TableUsersCompletedMichicans';
// import { Suspense } from 'react';
// import Loading from '../../../loading';


export default function DashUsersEnrolled() {
    return (

        <Container fluid>

            <Title order={1}>Users Completed MichiCANS</Title>
            <Space h="md" />
            <TableUsersCompletedCans/>
        </Container>

    );
}
