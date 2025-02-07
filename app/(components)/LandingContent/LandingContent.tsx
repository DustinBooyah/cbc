import { Title, List, Text, ListItem, Paper, Grid, GridCol, Container, Space, Box, Image } from '@mantine/core';
import classes from './LandingContent.module.css';
import { LandingTrainingCards } from '../LandingTrainingCards/LandingTrainingCards';
export function LandingContent() {

  return (

    <Container size="lg" py="xl">
      <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 7 }}>

          <Title order={2} className={classes.title} mt="sm">
            Partnering to build up Maine’s system
          </Title>
          <Text mt="md">
          Maine is investing in behavioral health approaches that promote and support happier, healthier lives for children and young people. The Maine Center of Excellence (COE) for Behavioral Health and Well-Being brings together national experts, local communities, and people with lived experience. Together, we’re working to expand promising approaches across the state.</Text>
          {/* <Text mt="md">
            The Maine Center of Excellence (COE) for Behavioral Health and Well-being brings together national experts, local communities, and people with lived experience. Together, we’re working to expand promising approaches across the state.
          </Text> */}

        </GridCol>
        <GridCol span={{ base: 12, lg: 5 }}>
          <Image
            radius="md"
            h={300}
            // w="auto"
            // fit="contain"
            alt="l"
            src="/landing-1.jpeg"
            visibleFrom="lg"
          />
        </GridCol>
      </Grid>

      <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 5 }}>
          <Image
            radius="md"
            h={300}
            // w="auto"
            // fit="contain"
            alt="Parents and Caregivers"
            src="/landing-2.webp"
          />
        </GridCol>
        <GridCol span={{ base: 12, lg: 7 }}>
          <Title order={2} className={classes.title} mt="sm">
            Research-based approaches
          </Title>
          <Text mt="md">
            The Maine COE focuses on family-driven and youth-guided approaches, including High-Fidelity Wraparound (HFW), Youth MOVE Youth Peer Support, and PEARLS Family Support. These approaches tap into families’ unique strengths, experiences, and goals. They support families through connection to resources and supports in their local areas, reducing some of the stresses and challenges to keep families together as they navigate care and treatment for a child or youth’s behavioral health condition.  Research shows these approaches produce positive outcomes for children and families who need more intensive services.
          </Text>
        </GridCol>
      </Grid>

      <Grid py="xl" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="center">
        <GridCol span={{ base: 12, lg: 7 }}>
          <Title order={2} className={classes.title} mt="sm">
            A trained workforce – building capacity and skills
          </Title>
          <Text mt="md">
            To start, the Maine COE supports program coordinators, supervisors, peer support specialists, and coaches — all of whom play an integral role in advancing these approaches throughout the state. The Maine COE provides or connects them to training, coaching, technical assistance, and needed resources.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, lg: 5 }}>
          <Image
            radius="md"
            h={300}
            // w="auto"
            // fit="contain"
            alt="Parents and Caregivers"
            src="/landing-3.webp"
          />
        </GridCol>
      </Grid>
      <Space h="xl" />

      <LandingTrainingCards />
      <Space h="xl" />


      <Title order={2} className={classes.title} mt="lg" pt="lg">
        Comprehensive systems of care
      </Title>

      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

        <GridCol span={{ base: 12, lg: 6 }}>

          <Paper shadow="xs" radius="md" p="lg">
            <Text mt="md">
              In Maine, the system of care for behavioral health exists across many levels of intensity. Ideally, most youth and families can access this system early on at the lowest levels which are the least restrictive and most cost-effective options. However, there are situations where needs become more serious and higher levels of care are necessary. While these higher-intensity resources are crucial, they tend to be more expensive and serve fewer people. This can lead to difficulties in accessing and obtaining the most intensive care for families in need.
            </Text>
          </Paper>

        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>

          <Paper shadow="xs" radius="md" p="lg">
            <Text mt="md">
              The idea of a system of care for children receiving behavioral health services has been around for over 30 years. A comprehensive system of care provides a variety of community-driven services and support for young people and families experiencing and behavioral health challenges. This system is well-coordinated, promotes strong partnerships with families and youth, and is attentive to cultural and language needs, all aimed at improving their functioning at home, school, and in the community throughout their lives.
            </Text>
          </Paper>

        </GridCol>
      </Grid>
      <Box my="xl" py="xl">
        <Image
          radius="md"
          h={500}
          // w="auto"
          fit="contain"
          alt="Parents and Caregivers"
          src="/landing-4.webp"
        />
      </Box>


      <Text mt="md">
        Maine is committed to providing access to community-based services for children, youth, and families experiencing mental, emotional, and behavioral health issues. A key part of Maine’s approach is High-Fidelity Wraparound (HFW), which focuses on offering personalized, strength-based support to youth and families in their own communities. These services not only connect families with important formal support but also help build a network of informal, community-based support. Ultimately, families are empowered to make decisions about their own lives based on their individual needs and circumstances.
      </Text>

      <Title order={2} className={classes.title} mt="lg" pt="xl">
        Explore
      </Title>

      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

        <GridCol span={{ base: 12, lg: 6 }}>


          <Text mt="md">
            Learn about the different agencies, providers, and partners involved in delivering a coordinated, consistent set of services in Maine and how the Maine COE supports that effort.
          </Text>

        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>

          <List mt="md">
            {/* <ListItem>
            <a href="" rel="noopener noreferrer" target="_blank">Maine Children’s Behavioral Health Services</a>
        </ListItem>
          <ListItem> 
            <a href="" rel="noopener noreferrer" target="_blank">Help ME Grow</a>
        </ListItem> */}
            <ListItem>
              <a href="https://bethereforme.org/" rel="noopener noreferrer" target="_blank">Be There For ME </a>
            </ListItem>
            <ListItem>
              <a href="https://211maine.org/" rel="noopener noreferrer" target="_blank">2-1-1 Maine </a>
            </ListItem>
            <ListItem>
              <a href="https://www.mainemom.org/" rel="noopener noreferrer" target="_blank">Maine MOM </a>
            </ListItem>
            <ListItem>
              <a href="https://www.accessmaine.org/" rel="noopener noreferrer" target="_blank">Access Maine </a>
            </ListItem>
            <ListItem>
              <a href="https://www.mechildrenstrust.org/indexmain.asp" rel="noopener noreferrer" target="_blank">Maine’s Children’s Trust</a>
            </ListItem>
            <ListItem>
              <a href="https://www.maine.gov/future/childrens-cabinet?q=childrens-cabinet" rel="noopener noreferrer" target="_blank">Maine Children’s Cabinet </a>
            </ListItem>
            <ListItem>
              <a href="https://www.maine.gov/future/childrens-cabinet?q=childrens-cabinet" rel="noopener noreferrer" target="_blank">Prevention for ME </a>
            </ListItem>
          </List>
        </GridCol>
      </Grid>
      <Title order={2} className={classes.title} mt="xl" pt="xl">
        Evaluation projects, reports, and data
      </Title>
      <Text mt="md" >
        PCG aims to evaluate Maine COE start-up of and sustained implementation of T/TA and delivery of HFW throughout the state. Evaluation is guided by principles of equity, partner and family engagement, transparency, continuous communication and sustainability, using the U.S. Centers for Disease Control and Prevention Evaluation Framework to examine implementation progress as well as relationships, practice, and governing policy.</Text>
      <Text mt="md" >
        The evaluation is based on a <a href="/coe-theory-of-change.pdf" rel="noopener noreferrer" target="_blank">theory of change and logic model</a> that suggests behavioral health treatment needs can be addressed by training coordinators and specialists in prescribed models (HFW, Peer Connect, and PEARLS). This influx of training will increase access to high-quality, evidence-based services available to youth and families most in need.</Text>
      <Text mt="md" >
        Ongoing assessment will note progress made toward goals, objectives and outcome measures, as well as provide continuous quality improvement (CQI) of the Maine COE and its implemented interventions.
      </Text>
    </Container>

  );
}