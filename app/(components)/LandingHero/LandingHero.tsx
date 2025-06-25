import { Overlay, Container, Title, Grid, GridCol, Image, Text } from '@mantine/core';
import classes from './LandingHero.module.css';

export function LandingHero() {
  return (
    <div className={classes.hero}>
      {/* <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      /> */}
      <Container className={classes.container} size="lg">
        <Grid align="center" justify="center">
          <GridCol pb="lg" span={{ base: 4, md: 4, lg: 4 }}>
            {/* <Image
              src="/logo-coe-white.webp"
              h={140}
              fit="contain"
              alt="logo"
              className={classes.image}
            /> */}
          </GridCol>
          <GridCol pb="xl" span={{ base: 8, md: 8, lg: 8 }}>
            {/* <Text className={classes.herotext} >
              Michigan Capacity Building Center (CBC)
            </Text> */}
          </GridCol>
        </Grid>
       
        {/* <Title className={classes.title} >Strengthening Behavioral Health Services for Michigan's Children and their Families </Title> */}
        {/* <Text className={classes.description} size="xl" mt="lg">
        </Text> */}
      </Container>
    </div>
  );
}