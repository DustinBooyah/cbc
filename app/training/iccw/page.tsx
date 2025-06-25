import { BreadcrumbsNav } from "@/app/(components)/Breadcrumbs/BreadcrumbsNav";
import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { CatalogICCW } from "@/app/(components)/Training/Catalog/CatalogICCW";
import { Title, Text, List, ListItem, ThemeIcon, Container, Button, Grid, Image, GridCol } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';


export default function ICCWPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="lg">
        <BreadcrumbsNav />
        <Title order={1} mt="md">Intensive Care Coordination with Wraparound (ICCW)</Title>
        <Button component="a" href="#catalog" size="lg" mt="md">View ICCW Training Catalog</Button>
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Title order={2} mt="lg" mb="sm">What is Intensive Care Coordination with Wraparound (ICCW)?</Title>
            <Text mb="sm">Wraparound is a planning and organizing process that brings clinicians and other team members together with the youth and family (team) to develop a future-oriented plan that addresses family needs by building on their strengths. Over time, the team works together to review and adapt the plan based on unique family preferences and culture.</Text>
            <Text mb="sm">Intensive Care Coordination reflects a set of purposeful actions bundled together to organize, access, arrange and create services that are tailored to the strengths and needs of individuals within families through facilitating a child and family team for each family served.</Text>
          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="ICCW"
              src="/category-iccw.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>

        <Text mb="sm"><strong>ICCW includes:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Organizing a Child and Family Team.</ListItem>
          <ListItem>Developing an individualized plan of care.</ListItem>
          <ListItem>Coordinating across systems and services.</ListItem>
          <ListItem>Supporting families to lead their own planning process.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">Why ICCW Matters</Title>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Empowers families to access services and supports based upon their needs, strengths and goals.</ListItem>
          <ListItem>Increases coordination across child-serving systems.</ListItem>
          <ListItem>Helps reduce out-of-home placements and crisis events.</ListItem>
          <ListItem>Builds long-term support networks for families.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">What You&apos;ll Learn in ICCW Training</Title>
        <Text mb="sm"><strong>ICCW trainings help you:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Understand the principles and phases of Wraparound.</ListItem>
          <ListItem>Facilitate effective Child and Family Team meetings.</ListItem>
          <ListItem>Gather and organize strengths and needs using tools like the MichiCANS.</ListItem>
          <ListItem>Practice cultural humility and trauma-informed engagement.</ListItem>
          <ListItem>Build creative, collaborative solutions with families.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">Prerequisites for Implementing Quality Wraparound:</Title>
        <List mb="md">
          <ListItem>Appreciation for the children and parents you get to work with.</ListItem>
          <ListItem>Ability to gather and organize information from a variety of sources (System Files, Family Interviews & Stories, MichiCANS, Social Histories) into a comprehensive story.</ListItem>

          <ListItem>Ability to convey a sense of hospitality and welcome to family members and system or community partners.</ListItem>
          <ListItem>Skill of being able to imagine and generate creative solutions for seemingly impossible situations.</ListItem>
          <ListItem>Talent of bringing people together for collaborative problem-solving.</ListItem>
        </List>
        <Text mb="sm">MDHHS developed a provisional approval process for providers to deliver Intensive Care Coordination with Wraparound (ICCW) and Wraparound until the new ICCW certification process is implemented. Provisional certification in ICCW will enable staff to take on a full caseload or a caseload size as supervision deems appropriate. For more information visit the following <a href="https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Assistance-Programs/Medicaid-BPHASA/Public-Comment/2024/2423-BCCHPS-P.pdf">link</a>.</Text>
        <Title order={2} mt="lg" mb="sm" id="catalog">Ready to grow?</Title>
        <Text mb="sm">Below are the current ICCW trainings offered. Select a training to learn more. Important Note: Please follow these instructions to create your personal CBC account and register for training.</Text>
        <Text mb="sm">Please continue to check our calendar for future training opportunities. For questions on specific trainings contact <a href="mailto:MICBC@pcgus.com">MICBC@pcgus.com</a>.</Text>
        <CatalogICCW/>

      </Container>

      <FooterLinksOuter />
    </main>
  );
} 