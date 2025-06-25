// 'use client'
// import { Carousel } from '@mantine/carousel';
// import { useMediaQuery } from '@mantine/hooks';
import { Title, List, Text, ListItem, Paper, Grid, GridCol, Container, SimpleGrid, Box, Image, UnstyledButton, Overlay, } from '@mantine/core';
import classes from './TrainingImageLinks.module.css';

const categories = [
    {
        // image:'https://placehold.co/600x400?text=Placeholder',
        image:'/category-michicans.webp',
        title: 'MichiCANS',
        link:'/training/michicans'
    },
    {
        // image:'https://placehold.co/600x400?text=Placeholder',
        image:'/category-cwp.webp',
        title: 'CWP',
        link:'/training/cwp',
    },
    {
        // image:'https://placehold.co/600x400?text=Placeholder',
        image:'/category-asd.webp',
        title:'ASD',
        link:'/training/asd',
    },
    {
        // image:'https://placehold.co/600x400?text=Placeholder',
        image:'/category-sedw.webp',
        title: 'SEDW',
        link:'/training/sedw'
    },
    {
        // image:'https://placehold.co/600x400?text=Placeholder',
        image:'/category-iccw.webp',
        title: 'ICCW',
        link:'/training/iccw',
    },
    // {
    //     // image:'https://placehold.co/600x400?text=Placeholder',
    //     image:'/imagelinks-6.webp',
    //     title:'ICSS',
    //     link:'/trainings/icss',
    // },
];
export function TrainingImageLinks() {
    const buttons = categories.map((category) => (
        <UnstyledButton
            component="a"
            style={{ backgroundImage: `url(${category.image})` }}
            className={classes.categoryCard}
            key={category.title}
            href={category.link}
        >
            <Overlay gradient="linear-gradient(145deg, #175f5c 0%, #001c2f 100%)" opacity={0.85} zIndex={1} />
            <Title order={3} className={classes.categoryLabel}>
                <strong>{category.title}</strong>
            </Title>
        </UnstyledButton>
    ));
    return (
        <Container size="xl" py="xl">
            <SimpleGrid cols={{ base: 1, sm: 3 }}>{buttons}</SimpleGrid>
        </Container>

    );
}