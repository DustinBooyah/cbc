// 'use client'
// import { useMediaQuery } from '@mantine/hooks';
import { Title, List, Text, ListItem, Paper, Grid, GridCol, Container, SimpleGrid, Box, Image, UnstyledButton, Overlay, } from '@mantine/core';
import classes from './LandingImageLinks.module.css';

const categories = [
    {
        image:'/landing-col-1.webp',
        title: 'Training',
        link:'/trainings'
    },
    {
        image:'/parents-2.webp',
        title: 'Parents and Caregivers',
        link:'/parents',
    },
    {
        image:'/landing-col-3.webp',
        title:'Partners',
        link:'/partners',
    },
];
export function LandingImageLinks() {
    const buttons = categories.map((category) => (
        <UnstyledButton
            component="a"
            style={{ backgroundImage: `url(${category.image})` }}
            className={classes.categoryCard}
            key={category.title}
            href={category.link}
        >
            <Overlay color="#000" opacity={0.6} zIndex={1} />
            <Title order={3} className={classes.categoryLabel}>
                {category.title}
            </Title>
        </UnstyledButton>
    ));
    return (
        <Container size="lg" py="xl">
            <SimpleGrid cols={{ base: 1, sm: 3 }}>{buttons}</SimpleGrid>
        </Container>

    );
}