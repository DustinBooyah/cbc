import { Title, List, Text, ListItem, Paper, Grid, GridCol, Container, Space, Box, Image, ThemeIcon } from '@mantine/core';
import classes from './LandingContent.module.css';
import { IconCheck } from '@tabler/icons-react';
// import { LandingContentFeatures } from './LandingContentFeatures';
import { TrainingImageLinks } from '../Training/TrainingImageLinks/TrainingImageLinks';

export function LandingContent() {

  return (
    <Container size="xl" >
      <Image src="/hero-cbcvisualsmall.webp" alt="Michigan Capacity Building Center (CBC)"></Image>

      <Title order={1} size="h2" ta="center" mt="xl">Strengthening behavioral health services for Michigan&apos;s children and their families. </Title>
      <Text mt="md" ta="center">
        Welcome to the Michigan Capacity Building Center (CBC). The CBC is an online training and resource support center. The purpose of the CBC is to provide comprehensive training and resources to strengthen and expand behavioral health services statewide with the goal of helping all children and their families thrive.</Text>

      <Grid py="lg" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 7 }}>
          <Title order={2}  className={classes.title}>Through the Capacity Building Center (CBC) website, users can: </Title>
          <List
            mt="md"
            spacing="xs"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <ListItem>
              Find free detailed information about scheduled and future training.
            </ListItem>
            <ListItem>
              Register for trainings and events.
            </ListItem>
            <ListItem>
              Manage required certifications and Continuing Education credit hours obtained.
            </ListItem>
            <ListItem>
              Maintain a record of trainings specific to children and families that count toward the Children&apos;s Diagnostic and Treatment Services training requirement.
            </ListItem>
            <ListItem>
              Explore other professional development offerings and resources.
            </ListItem>
          </List>
          {/* <Title order={2} className={classes.title} mt="sm">Who We Serve</Title> */}
          <Title order={2} className={classes.title} mt="lg">Professionals We Serve</Title>

          <List mt="md">
            <ListItem>
              Prepaid Inpatient Health Plan (PIHP) staff
            </ListItem>
            <ListItem>
              Community Mental Health Services Program (CMHSP) professionals and their contracted providers
            </ListItem>
            <ListItem>
              Michigan Department of Health and Human Services Children&apos;s Services Administration (CSA) staff
            </ListItem>
            <ListItem>
              Behavioral health providers who serve children, youth and families
            </ListItem>
          </List>
          {/* <Text mt="md">
            The Michigan Capacity Building Center&apos;s purpose is to support the professionals and organizations that help Michigan&apos;s children, youth and families achieve optimal mental and behavioral health. The Michigan Capacity Building Center enhances behavioral health services statewide by providing comprehensive training and resources that help children, and their families thrive.</Text> */}
        </GridCol>
        <GridCol span={{ base: 12, lg: 5 }}>
          <Image
            radius="md"
            h={300}
            alt="Who we serve"
            src="/landing-4.webp"
            visibleFrom="lg"
          />
        </GridCol>
      </Grid>
      <TrainingImageLinks />

      <Space h="xl" />
      <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 5 }}>
          <Image
            radius="md"
            h={300}
            alt="Expanding Workforce Capacity"
            src="/landing-2.webp"
          />
        </GridCol>
        <GridCol span={{ base: 12, lg: 7 }}>
          <Title order={2} className={classes.title} mt="sm">
            Developing Michigan&apos;s Children&apos;s Behavioral Health Workforce</Title>
          <Text mt="md">
            The CBC is committed to enhancing behavioral health services through strategic professional development. The strength of the behavioral health system in Michigan lies in the continuous growth and support of our behavioral health professionals. The CBC training programs are designed to:</Text>
          <List mt="md">
            <ListItem>
              Build on existing learning and knowledge.
            </ListItem>
            <ListItem>
              Introduce innovative practices.
            </ListItem>
            <ListItem>
              Provide the tools and resources necessary for professionals to excel in supporting Michigan&apos;s children, youth and families.
            </ListItem>
            <ListItem>
              Connect practitioners through networks of shared practice and experience.
            </ListItem>
          </List>
          {/* // [BUTTON: Explore Current Training Opportunities](Link to: [Training Portal URL])    */}
        </GridCol>
      </Grid>
      <Space h="xl" />
      <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 7 }}>
          <Title order={2} className={classes.title} mt="lg" pt="xl">
            Training Options That Fit Your Needs</Title>
          <Text mt="md">
            <strong>Learning is not one-size-fits-all.</strong><br />We understand that behavioral health professionals have diverse learning styles, schedules, and professional development goals. That is why we offer a wide range of training modalities designed to meet you where you are in your career.
          </Text>
          <Text mt="md">
            From hands-on, intensive in-person sessions to flexible, self-paced online courses, our trainings are tailored to support your growth. Whether you&apos;re pursuing Continuing Education Units (CEUs), participating in communities of practice, or fulfilling licensure requirements, the CBC delivers accessible, high-quality learning experiences that empower you to thrive in your role.</Text>
        </GridCol>
        <GridCol span={{ base: 12, lg: 5 }}>
          <Image
            radius="md"
            h={300}
            alt="Training Options That Fit Your Needs"
            src="/landing-3.webp"
          />
        </GridCol>
      </Grid>
      <Space h="xl" />

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Why Training Matters
      </Title>
      <Title order={3} ta="center">
        The Capacity Building Center will:
      </Title>
      <Box my="xl" py="xl">
        <Image
          radius="md"
          h={400}
          // w="auto"
          fit="contain"
          alt="Why Training Matters"
          src="/landing-icons.webp"
        />
      </Box>

      {/* <LandingContentFeatures/> */}
      <Space h="xl" />

    </Container>

  );
}