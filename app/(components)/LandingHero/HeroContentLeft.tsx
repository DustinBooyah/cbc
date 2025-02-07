import { Overlay, Container, Title, Grid, GridCol, Image, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="lg">
        <Grid align="center" justify="center">
          <GridCol pb="lg" span={{ base: 4, md: 4, lg: 4 }}>
            <Image
              src="/logo-coe-white.webp"
              h={140}
              fit="contain"
              alt="logo"
              className={classes.image}
            />
          </GridCol>
          <GridCol pb="xl" span={{ base: 8, md: 8, lg: 8 }}>
            <Text className={classes.herotext} >
              Maine Center of Excellence for Behavioral Health and Well-being
            </Text>
          </GridCol>
        </Grid>
       
        <Title className={classes.title} >Strengthening Maine’s behavioral health system for youth and families</Title>
        <Text className={classes.description} size="xl" mt="lg">
        Funded by the Maine Department of<br></br>Health & Human Services, and operated by<br></br>Public Consulting Group 
        </Text>
      </Container>
    </div>
  );
}