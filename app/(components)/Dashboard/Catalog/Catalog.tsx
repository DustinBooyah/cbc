'use client'
import {
  Text,
  Card,
  SimpleGrid,
  Image,
  Button,
  Badge,
  CardSection,
} from '@mantine/core';
import Link from 'next/link';
import { trainingData } from '@/app/lib/trainingData';

import classes from './Catalog.module.css';

export function DashboardCatalog() {
  const cards = trainingData.map((training) => (
    <Card shadow="sm" key={training.id} withBorder className={classes.card}>
      <CardSection>
        <Image
          src={training.image}
          alt={training.course} 
          height={150}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </CardSection>
      <Badge className={classes.audience} size="md" variant="dot">
        {training.format}
      </Badge>
      <CardSection className={classes.section}>
        <Text className={classes.course} component="h2">
          {training.course}
        </Text>
      </CardSection>
      <CardSection className={classes.footer}>
        <Link href={`/dashboard/catalog/${training.id}`} className={classes.noUnderline}>
          <Button fullWidth justify="center" radius="md" className={classes.noUnderline}>
            View Details
          </Button>
        </Link>
      </CardSection>
    </Card>
  ));

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }} spacing="xl">
      {cards}
    </SimpleGrid>
  );
}