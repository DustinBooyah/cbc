import { BreadcrumbsNav } from "@/app/(components)/Breadcrumbs/BreadcrumbsNav";
import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { CatalogSEDW } from "@/app/(components)/Training/Catalog/CatalogSEDW";
import { Title, Text, List, ListItem, ThemeIcon, Container, Button, Grid, Image, GridCol } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';


export default function SEDWPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="lg">
        <BreadcrumbsNav />
        <Title order={1} mt="md">Waiver for Children with Serious Emotional Disturbances (SEDW)</Title>
        <Button component="a" href="#catalog" size="lg" mt="md">View SEDW Training Catalog</Button>
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Title order={2} mt="lg" mb="sm">What is the Waiver for Children with Serious Emotional Disturbances (SEDW)?</Title>
            <Text mb="sm">The SEDW provides services that enhance or add to Medicaid State Plan coverage for children through age 20 with Serious Emotional Disturbances (SED).  MDHHS operates the SEDW through contracts with Prepaid Inpatient Health Plans (PIHPs). The SEDW is a managed care program administered by Prepaid Inpatient Health Plans (PIHPs) in partnership with Community Mental Health Service Providers (CMHSPs) and other community agencies. The SEDW enables Medicaid to fund necessary home and community-based services for children with SED who meet the criteria for admission to the state inpatient psychiatric hospital and/or  are  at risk of hospitalization without waiver services. The PIHP is responsible for the assessment of potential waiver candidates.</Text>

          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="SEDW"
              src="/category-sedw.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>
        <Text mb="sm">Application for the SEDW is made through the PIHP. The Wraparound Facilitator, the child and their family and friends and other professional members of the planning team work together to identify the child/family&apos;s strengths, needs, interventions and outcomes following the Wraparound Practice Model. The Individual Plan of Service (IPOS) identifies all the services and supports necessary to meet the needs and outcomes.</Text>
        <Text mb="sm">To learn More about the SEDW, please visit <a href="https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/mentalhealth/medwaivers/children-with-serious-emotional-disturbances-waiver">MDHHS SEDW</a>.</Text>
        <Title order={2} mt="lg" mb="sm">Why SEDW Matters</Title>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Keeps children safely supported at home.</ListItem>
          <ListItem>Prevents unnecessary psychiatric hospitalizations.</ListItem>
          <ListItem>Empowers families through Wraparound planning.</ListItem>
          <ListItem>Ensures services align with cultural and family needs.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">What You&apos;ll Learn in SEDW Training</Title>
        <Text mb="sm"><strong>SEDW Trainings help professionals:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Understand SEDW eligibility and application processes.</ListItem>
          <ListItem>Coordinate Wraparound teams and create service plans.</ListItem>
          <ListItem>Navigate documentation and Medicaid requirements.</ListItem>
          <ListItem>Collaborate with families to identify strengths and goals.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm" id="catalog">Ready to grow?</Title>
        <Text mb="sm">Below are the current SEDW trainings offered. Select a training to learn more. Important Note: Please follow these instructions to create your personal CBC account and register for training.</Text>
        <Text mb="sm">Please continue to check our calendar for future training opportunities. For questions on specific trainings contact <a href="mailto:MICBC@pcgus.com">MICBC@pcgus.com</a>.</Text>

        <CatalogSEDW/>

      </Container>

      <FooterLinksOuter />
    </main>
  );
} 