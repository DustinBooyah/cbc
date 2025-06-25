import { BreadcrumbsNav } from "@/app/(components)/Breadcrumbs/BreadcrumbsNav";
import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { MichicansCallout } from "@/app/(components)/Training/Callouts/MichicansCallout";
import { CatalogMichicans } from "@/app/(components)/Training/Catalog/CatalogMichicans";
import { Title, Text, List, ListItem, ThemeIcon, Container, Button, Grid, Image, GridCol } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';

export default function MichicansPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="lg">
        <BreadcrumbsNav />
        <Title order={1} mt="md">Michigan Child and Adolescent Needs and Strengths (MichiCANS)</Title>
        <Button component="a" href="#catalog" size="lg" mt="md">View MichiCANS Training Catalog</Button>
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Title order={2} mt="lg" mb="sm">What is the MichiCANS?</Title>
            <Text mb="sm">The Michigan Child and Adolescent Needs and Strengths (MichiCANS) is a powerful tool for understanding what a child and their family truly need and where their strengths lie. It&apos;s more than an assessment—it&apos;s a shared process that helps teams make informed decisions, set goals and create tailored care plans. By using MichiCANS, professionals can build trust, amplify family voices and track real outcomes over time.</Text>
          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="MichiCANS"
              src="/category-michicans.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>

        <Text mb="sm"><strong>The MichiCANS tool is:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Standardized</ListItem>
          <ListItem>Based upon best practices and evidence</ListItem>
          <ListItem>Strengths-focused</ListItem>
          <ListItem>Collaborative</ListItem>
        </List>
        <Text mb="sm">To learn more about the MichiCANS, please visit the <a href="http://www.michigan.gov/MichiCANS">MichiCANS webpage</a>.</Text>
        <Title order={2} mt="lg" mb="sm">Why the MichiCANS Matters</Title>
        <Text mb="sm"><strong>MichiCANS helps professionals:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Communicate clearly about needs and strengths.</ListItem>
          <ListItem>Design individualized service plans.</ListItem>
          <ListItem>Guide care planning and track progress.</ListItem>
          <ListItem>Focus on the voices of children, youth and families.</ListItem>
          <ListItem>Support statewide consistency and quality improvement.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">MichiCANS Training Process</Title>
        <Image
          radius="md"
          h={600}
          alt="MichiCANS Training Process"
          src="/michicans-training-process.webp"
          fit="contain"
          visibleFrom="lg"
        />

        <Text mb="sm">Whether you&apos;re a clinician or a clinical supervisor, the MichiCANS training path provides clear, comprehensive support throughout your professional development.</Text>
        <Text><strong>For Clinical Supervisors:</strong></Text>
        <List mb="md">
          <ListItem>Begin with Part 1 of Required Certification Training: Transformational Collaborative Outcomes Management TCOM Orientation and Part 2 of Required Certification Training: MichiCANS Overview.</ListItem>
          <ListItem>Complete a Certification Assessment (successful assessment required for certification).</ListItem>
          <ListItem>Engage in Action Planning training required for all MichiCANS staff and supervisors of staff participating in any component of a planning process.</ListItem>
          <ListItem>Participate in Supervisory Training which is required for all Supervisors.</ListItem>
          <ListItem>Optional but recommended: Supervisor Community of Practice Meetings.</ListItem>
        </List>
        <Text><strong>For Clinicians:</strong></Text>
        <List mb="md">
          <ListItem>Complete required Part 1 and Part 2 of Certification Training (TCOM Orientation and MichiCANS Overview).</ListItem>
          <ListItem>Complete a Certification Assessment (successful assessment required for certification).</ListItem>
          <ListItem>Engage in Action Planning training required for all MichiCANS staff and supervisors of staff.</ListItem>
        </List>
        <Text mb="sm">The training path is strategically designed to build your skills progressively. While some components are mandatory and others optional, each is carefully crafted to enhance your professional capabilities and ensure effective use of MichiCANS.</Text>
        <Title order={2} mt="lg" mb="sm">What You&apos;ll Learn in MichiCANS Training</Title>
        <Text mb="sm"><strong>MichiCANS trainings give you the knowledge and tools to:</strong></Text>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem>Complete assessments with confidence.</ListItem>
          <ListItem>Engage families in the planning process.</ListItem>
          <ListItem>Turn data into meaningful action steps.</ListItem>
          <ListItem>Use MichiCANS to support teams and improve care.</ListItem>
          <ListItem>Understand certification and re-certification requirements.</ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">Training That Fits Your Role</Title>
        <List mb="md">
          <ListItem><strong>For Clinicians</strong> - Learn how to complete the MichiCANS collaboratively with youth and families.</ListItem>
          <ListItem><strong>For Supervisors</strong> - Get guidance on how to support your team, monitor quality and use MichiCANS for oversight and coaching.</ListItem>
        </List>
        <Text mb="sm">Training that is Interactive and Practical. Workshops are led by experienced trainers and offer peer interaction, examples and real-life applications. With interactive workshops, specialized sessions and regular opportunities to connect with peers across the state, MichiCANS training promotes a consistent, strengths-based approach that supports better outcomes for children, youth and families.</Text>
        <Title order={2} mt="lg" mb="sm">Certification Details</Title>
        {/* <MichicansCallout/> */}
        <Text mb="sm">Select the link for information on <a href="/annual-michicans-recertification-requirements.pdf">Annual MichiCANS Recertification Requirements</a>.</Text>

        <Text><strong>Please note: All MichiCANS certification exams, initial and annual, will continue to be accessed and taken via the TCOM training platform at <a href="http://www.tcomtraining.com">www.tcomtraining.com</a>. Support related to accessing certification exams can be found at <a href="mailto:support@tcomtraining.com">support@tcomtraining.com</a></strong>.</Text>
        <Title order={2} mt="lg" mb="sm" id="catalog">Ready to grow?</Title>
        <Text mb="sm">Below are the current MichiCANS trainings offered by the CBC. Select a training to learn more. Important Note: Please follow these instructions to create your personal CBC account and register for training.</Text>

        <CatalogMichicans />

      </Container>

      <FooterLinksOuter />
    </main>
  );
} 