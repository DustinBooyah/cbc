import { BreadcrumbsNav } from "@/app/(components)/Breadcrumbs/BreadcrumbsNav";
import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { CatalogCWP } from "@/app/(components)/Training/Catalog/CatalogCWP";
import { Title, Text, List, ListItem, ThemeIcon, Container, Button, Grid, Image, GridCol } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';


export default function CWPPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="lg">
        <BreadcrumbsNav />
        <Title order={1} mt="md">Children&apos;s Waiver Program (CWP)</Title>
        <Button component="a" href="#catalog" size="lg" mt="md">View CWP Training Catalog</Button>

        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Title order={2} mt="lg" mb="sm">What is the Children&apos;s Waiver Program (CWP) training?</Title>
            <Text mb="sm">The CWP training is designed to build confidence and competence in professionals who support children with Intellectual disabilities including children with Autism and their families. These sessions provide practical guidance on navigating the waiver process, from understanding eligibility and documentation requirements to effectively communicating with families and supporting them through each step. Participants are encouraged to engage with peers, ask questions and apply what they learn to real-life scenarios. With regular learning opportunities and ongoing spaces for discussion and collaboration, these trainings help professionals stay informed, connected and equipped to deliver high-quality, person-centered care.</Text>

          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="CWP"
              src="/category-cwp.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>
        <Text mb="sm">The CWP allows Medicaid to fund home and community-based services for children under 18. To be eligible for the CWP, the child must have a documented intellectual/developmental disability and need medical or behavioral supports and services at home. The child must also have behavioral or medical and habilitative needs at home on a consistent daily basis that meet requirements for the level of care for an Intermediate Care Facility for Individuals with Intellectual Disabilities (ICF/IID). To initiate the process, the family contacts the CMHSP in their county of residence and requests an assessment for a prescreening for the CWP.</Text>
        <Text><strong>Key Features:</strong></Text>
        <List mb="md">
          <ListItem>Supports children with behavioral, medical, or habilitative needs.</ListItem>
          <ListItem>Helps families access critical services at home.</ListItem>
          <ListItem>Requires a prescreening assessment through the local CMHSP.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">Why CWP Matters</Title>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Supports families in keeping children safely at home.</ListItem>
          <ListItem>Reduces reliance on institutional care.</ListItem>
          <ListItem>Improves quality of life through tailored supports.</ListItem>
          <ListItem>Builds provider capacity to serve children with complex needs.</ListItem>
        </List>
        <Text mb="sm">To Learn More about CWP <a href="https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/mentalhealth/medwaivers/childrens-waiver-program#:~:text=The%20Children's%20Waiver%20Program%20(CWP,supports%20and%20services%20at%20home.">visit CWP MDHHS</a>.</Text>
        <Title order={2} mt="lg" mb="sm">What You&apos;ll Learn in CWP Training</Title>
        <Text mb="sm"><strong>CWP trainings help professionals:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Understand eligibility, documentation and prescreening steps.</ListItem>
          <ListItem>Communicate clearly and compassionately with families.</ListItem>
          <ListItem>Identify and plan appropriate services and supports.</ListItem>
          <ListItem>Use critical thinking to align services with program standards.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm" id="catalog">Ready to grow?</Title>
        <Text mb="sm">Below are the current CWP trainings offered. Select a training to learn more. Important Note: Please follow these instructions to create your personal CBC account and register for training.</Text>
        <CatalogCWP />

      </Container>

      <FooterLinksOuter />
    </main>
  );
} 