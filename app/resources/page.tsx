import { FooterLinksOuter } from "@/app/(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "@/app/(components)/Headers/HeaderOuter";
import { Title, Text, List, ListItem, ThemeIcon, Container } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';


export default function ResourcesPage() {
  return (
    <main>
      <HeaderOuter />
      <Container size="xl" mt="xl">
        <Title order={1} mt="md" mb="md">Resources</Title>
        <Text mb="sm">Helpful Links & Materials</Text>
        <Text mb="sm">Stay informed and supported with these hand-picked tools and documents:</Text>
        <Title order={2} mt="lg" mb="sm">Upcoming Training Flyers</Title>
        <List icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>} spacing="xs" mb="md">
          <ListItem><a href="/flyer-cwp-community-of-practice.pdf">CWP Community of Practice Flyer</a></ListItem>
          <ListItem><a href="/flyer-sedw-community-of-practice.pdf">SEDW Community of Practice Flyer</a></ListItem>
          <ListItem><a href="/flyer-asd-ados-2-comprehensive-evals.pdf">ADOS-2 Comprehensive Evals</a></ListItem>
          <ListItem><a href="/flyer-asd-assmt-mgmt-of-asd-in-transition-age.pdf">Assmt & Mgmt of ASD in Transitional-Age Youth and Adults</a></ListItem>
          <ListItem><a href="/flyer-asd-disentangling-childhood-trauma-flyer.pdf">Disentangling Childhood Trauma</a></ListItem>
          <ListItem><a href="/flyer-asd-understanding-neurodiversity-flyer.pdf">Understanding Neurodiversity</a></ListItem>
        </List>
        <Title order={2} mt="lg" mb="sm">MichiCANS Resources</Title>
        <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/mentalhealth/childrenandfamilies/michicans/service-provider/training-resources">Training Resources and Information for Providers</a></Text>
        <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/mentalhealth/childrenandfamilies/michicans/youth-parent-or-caregiver">MichiCANS Resources for Youth and Caregivers</a></Text>
        {/* <Text mb="sm"><a href="/annual-michicans-recertification-requirements.pdf">Annual MichiCANS Recertification Requirements</a></Text> */}
        <Title order={2} mt="lg" mb="sm">ASD Resources</Title>
        <Text mb="sm"><a href="https://www.michigan.gov/autism/-/media/Project/Websites/autism/Resources/Medicaid_ASD_Best_Practice_Guidelines.pdf?rev=9d8003e03f3d4469b98e398086de0c0e">Medicaid Autism Spectrum Disorder Screening, Evaluation and Treatment Recommendation Best Practice Guidelines (May 2022)</a></Text>
        <Text mb="sm"><a href="https://publications.aap.org/toolkits/pages/Autism-Toolkit?autologincheck=redirected">AAP Autism Toolkit</a></Text>
        <Text mb="sm"><a href="https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/Identification-Evaluation-and-Management-of">AAP Identification, Evaluation, and Management of Children with ASD</a></Text>
        {/* <Title order={2} mt="lg" mb="sm">Intensive Crisis Stabilization Services (ICSS) Resources</Title>
        <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/adult-child-serv/information-and-resources/emergency-services/intensive-crisis-stabilization-services">ICSS MDHHS</a></Text>
        <Text mb="sm"><a href="https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Folder3/Folder76/Folder2/Folder176/Folder1/Folder276/Health_Care_Providers_How_Do_I_referral_for_intensive_crisis_stabilization_services_122020.pdf?rev=3a48f7c2e1ce4bacac945e4a0dd15ead&amp;hash=E3B4E0F44098EB83551EC41BB2FFBDFB">How do I engage Intensive Crisis Stabilization Services and the Mobile Crisis Response?</a></Text>
        <Text mb="sm"><a href="https://cmham.org/membership/cmhsp-directory/">Community Mental Health Association of Michigan (CMHA) - CMHSP Directory</a></Text> */}
        <Title order={2} mt="lg" mb="sm">Additional Resources</Title>
        <Text mb="sm"><a href="https://www.michigan.gov/-/media/Project/Websites/mdhhs/Folder4/Folder4/Folder3/Folder104/Folder2/Folder204/Folder1/Folder304/Family-Driven_and_Youth-Guided_Policy_and_Practice_Guideline.pdf?rev=87ceccbfea784af28eb97569713a97d6">MDHHS Family-Driven Youth-Guided Policy and Practice Guidelines</a>.</Text>
      </Container>
      <FooterLinksOuter />
    </main>
  );
} 