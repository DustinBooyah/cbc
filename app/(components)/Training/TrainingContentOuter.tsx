import { Title, List, Text, ListItem, ThemeIcon, Grid, GridCol, Container, Button, Image } from '@mantine/core';
import { TrainingImageLinks } from './TrainingImageLinks/TrainingImageLinks';
import { IconCheck } from '@tabler/icons-react';
import { TrainingsCallout } from './Callouts/TrainingsCallout';
import { TrainingsCalloutTwo } from './Callouts/TrainingsCalloutTwo';

export function TrainingContentOuter() {

  return (

    <Container size="xl" mt="xl">
      <Title order={1} mb="md">Training</Title>

      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 6 }}>
          <Text size="md" mb='xs'>The Michigan Capacity Building Center (CBC) is your go-to hub for trainings, tools and resources dedicated to advancing children&apos;s behavioral health.<br /><br />
            Designed for professionals across Michigan&apos;s behavioral health system, the CBC offers practical, applicable learning opportunities that support your work with children, youth and families.<br /><br />
            Whether you&apos;re developing new skills, strengthening existing knowledge, or working toward key professional development goals, our trainings are tailored to support your growth and enhance your impact in delivering high-quality care. </Text>
        </GridCol>
        <GridCol span={{ base: 12, lg: 6 }}>
          <Image
            radius="md"
            h={300}
            alt="Training Image"
            src="/training-overview-1.webp"
            visibleFrom="lg"
          />
        </GridCol>
      </Grid>
      <TrainingImageLinks />
      <TrainingsCallout />

      <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 6 }}>
          <Title order={2} mb='md'>Continuing Education Credits Available </Title>
          <List spacing="xs" mb="md">
            <ListItem>
              Many trainings offered through the CBC are approved for Continuing Education (CE) credits for Social Work and/or Psychology licensure.
            </ListItem>
            <ListItem>
              {/* Many trainings are approved for the Children&apos;s Diagnostic and Treatment Services (CTDS) program required training hours. For more information on CTDS, visit */}
              Many trainings are approved for the Children&apos;s Diagnostic and Treatment Services (CTDS) program required training hours.

            </ListItem>
            <ListItem>
              You can determine if a training is eligible for CE credits or CTDS hours in the training descriptions.
            </ListItem>
          </List>
          <Title order={2} mb='md'>Training that is Practical and Supportive</Title>
          <Text>Supporting children, youth and families takes more than just theory - it takes practical tools, real-life guidance and space to grow. The CBC trainings are designed to make your work efficient and more effective, whether you&apos;re new to this profession or looking to sharpen your skills. With a mix of formats, from hands-on sessions to flexible virtual options and ongoing communities of practice, there&apos;s something for every learning style.</Text>

        </GridCol>
        <GridCol span={{ base: 12, lg: 6 }}>
          <Image
            radius="md"
            h={300}
            alt="Another Training Image"
            src="/training-overview-2.webp"
            visibleFrom="lg"
          />
        </GridCol>
      </Grid>
      <TrainingsCalloutTwo />

      <Title order={2} mt="lg" mb="sm">What You&apos;ll Walk Away With</Title>
      <List
        mt={15}
        spacing="sm"
        icon={
          <ThemeIcon size={20} radius="xl">
            <IconCheck size={12} stroke={1.5} />
          </ThemeIcon>
        }
      >
        <ListItem>
          <strong>A certificate. </strong>
        </ListItem>
        <ListItem>
          <strong>New skills you can use immediately.</strong>
        </ListItem>
        <ListItem>
          <strong>Confidence in supporting children, youth and families.</strong>
        </ListItem>
      </List>

    </Container>
  );
}