import { Card, Space, Title, Button, Grid, GridCol, Group, ActionIcon } from '@mantine/core';
import classes from './LandingTrainingCards.module.css'

const trainings = [
    { link: '/flyer-pearls.pdf', label: 'PEARLS Specialist and Supervisor' },
    { link: '/flyer-wraparound-training.pdf', label: 'High Fidelity Wraparound' },
    { link: '/flyer-yps-training-dates.pdf', label: 'Peer Connect Specialist' },
    { link: '/flyer-peer-connect-supervisors-training.pdf', label: 'Peer Connect Supervisor' }
];
const cards = trainings.map((training) => (
    <GridCol span={{ base: 12, lg: 4 }} key={training.label}>
        <Card withBorder padding="lg" radius="md" >
            <Title order={4} size="h3">
                {training.label}
            </Title>
            <Space h="md" />
            <Button
                size="lg"
                variant="filled"
                component="a"
                href={training.link}
            >
                Download Flyer
            </Button>
        </Card>
    </GridCol>


));
export function LandingTrainingCards() {
    return (
        <div className={classes.wrapper}>
            <Title order={2} className={classes.title} ta="center" >
            Upcoming Training Dates and Info
            </Title>
            <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} justify="center">
            {cards}
            </Grid>
        </div>
    );
}

