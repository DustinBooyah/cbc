import { BreadcrumbsNav } from "@/app/(components)/Breadcrumbs/BreadcrumbsNav";
import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { CatalogASD } from "@/app/(components)/Training/Catalog/CatalogASD";
import { Title, Text, List, ListItem, ThemeIcon, Container, Button, Grid, Image, GridCol } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';


export default function ASDPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="lg">
        <BreadcrumbsNav />
        <Title order={1} mt="md">Autism Spectrum Disorder (ASD)</Title>
        <Button component="a" href="#catalog" size="lg" mt="md">View ASD Training Catalog</Button>

        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Title order={2} mt="lg" mb="sm">What is Autism Spectrum Disorder (ASD) Evaluation and Treatment Training?</Title>
            <Text mb="sm">Trainings offer professionals a comprehensive understanding of ASD across the lifespan, with practical strategies to enhance evaluation, referral and ongoing support. From early childhood through adulthood, the sessions explore best practices for making informed, evidence-based recommendations, conducting neuroaffirming assessments and navigating the complexities of co-occurring conditions like trauma or mental health disorders. ASD trainings emphasize partnership with families, interdisciplinary teams and individuals themselves to promote better outcomes and more inclusive care.</Text>

          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="ASD"
              src="/category-asd.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>
        <Text mb="sm">Participants will gain tools for writing reports, understanding neurodiversity, guiding transitional-age youth and distinguishing overlapping symptoms of trauma and ASD. Whether you&apos;re new to autism evaluation or looking to deepen your expertise, trainings offer fresh perspectives and knowledge to improve your practice and better serve individuals with autism and their families.</Text>
        <Text mb="sm">Learn more about ASD at <a href="https://www.michigan.gov/autism">MDHHS ASD</a>.</Text>
        <Title order={2} mt="lg" mb="sm">Why ASD Training Matters</Title>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Promotes inclusive, strengths-based care.</ListItem>
          <ListItem>Improves diagnostic clarity and care coordination.</ListItem>
          <ListItem>Equips professionals to support individuals and families with confidence.</ListItem>
          <ListItem>Reduces disparities in access and quality of ASD services.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">What You&apos;ll Learn in ASD Training</Title>
        <Text mb="sm"><strong>Through these trainings, you&apos;ll gain:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Skills for conducting neuroaffirming evaluations.</ListItem>
          <ListItem>Tools for writing effective, strengths-focused reports.</ListItem>
          <ListItem>Strategies for supporting transitional-age youth.</ListItem>
          <ListItem>Knowledge to distinguish ASD from trauma and other conditions.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm" id="catalog">Ready to grow?</Title>
        <Text mb="sm">Below are the current ASD trainings offered. Select a training to learn more. Important Note: Please follow these instructions to create your personal CBC account and register for training.</Text>
        <CatalogASD/>
      </Container>


      <FooterLinksOuter />
    </main>
  );
} 