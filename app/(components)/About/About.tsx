import { Title, List, Text, ListItem, ThemeIcon, Grid, GridCol, Container, Button, Image } from '@mantine/core';
import { AboutCallout } from './AboutCallout';

export function AboutContentOuter() {

  return (

    <Container size="xl" mt="xl">
      <Title order={1} mb="md">About Us</Title>

      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 6 }}>
          <Text size="md" mb='xs'>The Michigan Department of Health and Human Services (MDHHS) has developed and implemented a Capacity Building Center (CBC) for children&apos;s behavioral health professionals. The CBC is a new centralized training resource designed to expand training, support and resources for staff in Prepaid Inpatient Health Plans (PIHP), Community Mental Health Services Programs (CMHSP) and Children&apos;s Services Administration (CSA) in a variety of areas related to the behavioral health needs of children, youth, young adults and their families.<br /><br />
            In the future, training may also be expanded to other child-serving systems.  <br /><br />
            All training and material will be aligned with <a href="https://www.michigan.gov/-/media/Project/Websites/mdhhs/Folder4/Folder4/Folder3/Folder104/Folder2/Folder204/Folder1/Folder304/Family-Driven_and_Youth-Guided_Policy_and_Practice_Guideline.pdf?rev=87ceccbfea784af28eb97569713a97d6">MDHHS Family-Driven Youth-Guided Policy and Practice Guidelines.</a></Text>
        </GridCol>
        <GridCol span={{ base: 12, lg: 6 }}>
          <Image
            radius="md"
            h={300}
            alt="About"
            src="/about.webp"
            visibleFrom="lg"
          />
        </GridCol>
      </Grid>
      <AboutCallout/>
      <Text>Learn from subject-matter experts and individuals with lived experience - people who understand the challenges you face. Materials are designed to be user-friendly and easily accessible across the state.</Text>
    </Container>
  );
}