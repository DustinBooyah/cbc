import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { Title, Text, Grid, GridCol, Blockquote, Container } from "@mantine/core";
import { IconInfoCircle, IconSpeakerphone } from '@tabler/icons-react';


export default function TestimonialPage() {
  const icon = <IconSpeakerphone />;

  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="xl">
        <Title order={1} mb="md">Testimonials</Title>
        <Text mb="sm">We take pride in assisting Michigan providers to help families and children thrive.</Text>
        <Title order={2} mt="lg" mb="sm">Here is what the Capacity Building Center (CBC) training participants have to share:</Title>
        <Grid>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Blockquote color="rgba(9, 125, 115, 1)" cite="-  Training Participant: Understanding Neurodiversity & Conducting Neuroaffirming Evaluations" icon={icon} mt="xl">
              I just want to say both presenters, Jessica and Kara, were great. The training was relatable, easy to understand, liked the detailed explanation on neurodiversity.
            </Blockquote>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Blockquote color="rgba(9, 125, 115, 1)" cite="-  Training Participant: Understanding Neurodiversity & Conducting Neuroaffirming Evaluations" icon={icon} mt="xl">
              Interactive aspects of webinar was helpful as it helps to hear the different perspectives.
            </Blockquote>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Blockquote color="rgba(9, 125, 115, 1)" cite="- Training Participant: Common Needs and Comprehensive Referrals in Autism" icon={icon} mt="xl">
              I loved this training, it was very helpful to hear a multidisciplinary approach to communication and the different barriers our families might be facing.
            </Blockquote>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Blockquote color="rgba(9, 125, 115, 1)" cite="- Training Participant: Common Needs and Comprehensive Referrals in Autism" icon={icon} mt="xl">
              I appreciated the humility of both presenters. Both highly skilled and educated, but also aware of own limitations and very complimentary of other disciplines and emphasized that none of us know it all. This approach fosters comfort in collaborating. Thank you both.
            </Blockquote>
          </GridCol>

        </Grid>
        <Title order={2} mt="lg" mb="sm">We want to hear from you!</Title>
        <Text mb="sm">If you have a story to share or general feedback for us, please let us know. Please email us at <a href="mailto:MICBC@pcgus.com">MICBC@pcgus.com</a>.</Text>




      </Container>

      <FooterLinksOuter />
    </main>
  );
} 