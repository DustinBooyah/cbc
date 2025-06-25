import { LandingHero } from "./(components)/LandingHero/LandingHero";
import { HeaderOuter } from "./(components)/Headers/HeaderOuter";
import classes from "./(components)/LandingContent/LandingContent.module.css";
import { LandingContent } from "./(components)/LandingContent/LandingContent";
import { Title, Text, Container} from '@mantine/core';
import { FooterLinksOuter } from "./(components)/Footers/FooterLinksOuter";

export default function HomePage() {
  return (
    <main>
      <HeaderOuter/>
      <LandingContent/>
      <FooterLinksOuter/>
    </main>
  
  );
}
