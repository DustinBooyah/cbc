import { HeroContentLeft } from "./(components)/LandingHero/HeroContentLeft";
import { HeaderSimple } from "./(components)/Headers/HeaderSimple";
import classes from "./(components)/LandingContent/LandingContent.module.css";
import { LandingContent } from "./(components)/LandingContent/LandingContent";
import { Title, Text, Container} from '@mantine/core';
import { LandingImageLinks } from "./(components)/LandingImageLinks/LandingImageLinks";
import { FooterLinks } from "./(components)/FooterExternal/FooterLinks";

export default function HomePage() {
  return (
    <main>
      <HeaderSimple/>
      <HeroContentLeft/>
      <Container size="lg" py="xl">

        <Title order={2} className={classes.title} ta="center" mt="sm">
        Welcome to the Maine Center of Excellence<br></br>for Behavioral Health and Well-being
        </Title>

        <Text className={classes.description} ta="center" mt="md">
        Maine is supporting family well-being and stability by investing in comprehensive youth- and family-driven services with short-term and long-term benefits. Promoting safety, empowerment, strong relationships, community connections, and social/emotional skills in children and youth can help them avoid trauma and set them up for healthy, happy lives.
        </Text>

      </Container>
      <LandingImageLinks/>
      <LandingContent/>
      <FooterLinks/>
    </main>
  
  );
}
