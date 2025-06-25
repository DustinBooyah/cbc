import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { Title, Text, List, ThemeIcon, Container, Grid, Image, GridCol } from "@mantine/core";
// import { IconCircleCheck } from '@tabler/icons-react';


export default function AnnouncementsPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="xl">
        <Title order={1} mb="md">Announcements</Title>
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="top">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Text mb="sm">The Capacity Building Center (CBC) Announcement Page serves as a space for the latest updates, upcoming training opportunities and exciting developments in the field. Here we will share important information about program changes, community partnerships and the meaningful impact we&apos;re creating together. We encourage you to check back often to stay informed and connected with CBC&apos;s latest news and achievements.</Text>
          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="ICCW"
              src="/announcements.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>

      </Container>

      <FooterLinksOuter />
    </main>
  );
} 