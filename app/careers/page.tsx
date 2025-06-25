import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { Title, Text, List, ThemeIcon, Container, Grid, Image, GridCol } from "@mantine/core";


export default function CareersPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="xl">
        <Title order={1} mt="md" mb="md">Careers</Title>
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} align="top">
          <GridCol span={{ base: 12, lg: 6 }}>
            <Text mb="sm">The Capacity Building Center is dedicated to supporting behavioral health careers and empowering students with the information and technical assistance they need to make a profound difference. We are committed to sharing professional opportunities and meaningful pathways that drive lasting impact in the behavioral health field.</Text>
            <Title order={2} mb="sm">Resources for Michigan Behavioral Health Workforce Members</Title>
            <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/inside-mdhhs/legislationpolicy/workforce-access-and-grants-management-section/mi-bhisp">Michigan Behavioral Health Internship Stipend Program (MI-BHISP) Overview</a></Text>
            <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/doing-business/providers/behavioral-health-loan-repayment-program">Behavioral Health Loan Repayment Program (BHLRP) Overview</a></Text>
            <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/inside-mdhhs/legislationpolicy/workforce-access-and-grants-management-section">Resources for Michigan Behavioral Health Workforce Members One-Pager</a></Text>
          </GridCol>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Image
              radius="md"
              h={300}
              alt="Careers"
              src="/careers.webp"
              visibleFrom="lg"
            />
          </GridCol>
        </Grid>

     
      </Container>

      <FooterLinksOuter />
    </main>
  );
} 