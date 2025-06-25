import { Title, List, Text, ListItem, ThemeIcon, Grid, GridCol, Container, Button, Image, Space } from '@mantine/core';
import { TrainingCatalogCards } from './TrainingCatalogCards';

export function TrainingCatalogContent() {

  return (

    <Container size="xl" mt="xl">
      <Title order={1} mt='lg'>Training Catalog</Title>
      <Text fw={500}>Explore a comprehensive training catalog designed to meet the unique needs of behavioral health professionals.</Text>
      <Text size="md" mb='xs'>The curated selection of courses offers flexible learning opportunities through live virtual sessions and in-person workshops. Whether you&apos;re looking to develop new skills, enhance existing knowledge or meet critical professional development goals, training modules are tailored to support your growth and impact in serving children, youth and families.</Text>
      <Space h="xl" />
  <TrainingCatalogCards/>
    </Container>
  );
}