import { Flex, Grid, GridCol, Container, Title, Space } from '@mantine/core';
import { UserInfoWidget } from '../UserInfoWidget/UserInfoWidget';

export function DashboardContent() {

    return (
          <Container fluid>
        
              <Title order={1}>Welcome</Title>
              <Space h="md" />
              <Grid>
                <GridCol span={{ sm: 12, md: 12, lg: 6 }}>
                <UserInfoWidget/>
                </GridCol>
                <GridCol span={{ sm: 12, md: 12, lg: 6 }}>
                    <Flex direction="column" h="100%" justify="space-between" gap="md">
                  
                    </Flex>
                </GridCol>
                <GridCol span={{ sm: 12, md: 12, lg: 8 }}>
                    {/* <BalanceCard /> */}
                </GridCol>
                <GridCol span={{ sm: 12, md: 12, lg: 4 }}>
                    {/* <OverviewCard /> */}
                </GridCol>
                <GridCol span={12}>
                    {/* <TransactionCard /> */}
                </GridCol>
            </Grid>
            </Container>

             
      );

}
