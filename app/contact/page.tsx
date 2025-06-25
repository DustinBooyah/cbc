import { Container, Space } from '@mantine/core';
import { ContactModule } from '../(components)/Contact/ContactModule/ContactModule';
import { HeaderOuter } from '../(components)/Headers/HeaderOuter';
import { FooterLinksOuter } from '../(components)/Footers/FooterLinksOuter';

export default function ContactPage() {
    return (
      <main>
        <HeaderOuter/>
        <Container size="xl" mt="xl">
        <ContactModule/>             
        </Container>
        <FooterLinksOuter/>
      </main>
      
    );
  } 