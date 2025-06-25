import { FAQAccordion } from "../(components)/FAQAccordion/FAQAccordion";
import { FooterLinksOuter } from "../(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "../(components)/Headers/HeaderOuter";
import { TrainingContentOuter } from "../(components)/Training/TrainingContentOuter";
import { Title, Text, List, ListItem, ThemeIcon, Container } from "@mantine/core";
import { IconCircleCheck } from '@tabler/icons-react';


export default function FAQPage() {
  return (
    <main>
      <HeaderOuter />
      <FAQAccordion/>
      {/* <Container size="xl" mt="xl">
        <Title order={1} mt="md" mb="md">FAQs</Title>

        <Title order={2} size="h4"><strong>Q: What is the MDHHS Capacity Building Center (CBC)?</strong></Title>
        <Text mb="sm">A: The CBC is a new training resource designed to expand training opportunities for staff at Prepaid Inpatient Health Plans (PIHP), Community Mental Health Services Programs (CMHSP) and MDHHS Children&apos;s Services Administration (CSA). In the future, training may be expanded to other child-serving systems.</Text>
        
        <Title order={2} size="h4"><strong>Q: What is the purpose of the CBC?</strong></Title>
        <Text mb="sm">A: The purpose of the CBC is to provide staff with evidence-based and evidence-informed behavioral health training in areas related to children, youth and families.</Text>
        
        <Title order={2} size="h4"><strong>Q: Who has access to the CBC?</strong></Title>
        <Text mb="sm">A: All Prepaid Inpatient Health Plans (PIHP) and Community Mental Health Services Programs (CMHSP) staff and their contracted providers, MDHHS Children&apos;s Services Administration (CSA) and other children&apos;s behavioral health professionals in Michigan.</Text>
       
        <Title order={2} size="h4"><strong>Q: What does the CBC provide?</strong></Title>
        <Text mb="sm">A: Trainings, materials, information and resources related to children&apos;s behavioral health services. This will include in-person and live virtual trainings.</Text>
       
        <Title order={2} size="h4"><strong>Q: What trainings within children&apos;s behavioral health services are addressed through the CBC?</strong></Title>
        <Text>A: Initial trainings include:</Text>
        <List mb="xs" mt="xs">
          <ListItem>Intensive Care Coordination with Wraparound (ICCW),</ListItem>
          <ListItem>Autism Spectrum Disorder (ASD),</ListItem>
          <ListItem>Michigan Child and Adolescent Needs and Strengths (MichiCANS),</ListItem>
          <ListItem>Waiver for Children with Serious Emotional Disturbance (SEDW) and</ListItem>
          <ListItem>Children&apos;s Waiver Program (CWP).</ListItem>
        </List>
        <Text mb="sm">Additional trainings will be added in the future.</Text>
        
        <Title order={2} size="h4"><strong>Q: How can the CBC support my work as a behavioral health provider to children, youth and families?</strong></Title>
        <Text mb="sm">A: The CBC offers accessible training opportunities (live in-person and live virtual) and increased opportunities for obtaining hours toward the Children&apos;s Diagnostic and Treatment Service (CTDS) program requirements and Continuing Education (CE) credits for licensure. Enhanced learning experiences, networking opportunities and supports will also be available through communities of practice.</Text>
        
        <Title order={2} size="h4"><strong>Q: How do I know if a specific training offered through the CBC is approved for Continuing Education Units (CEUs)?</strong></Title>
        <Text mb="sm">A: If a training is approved for CEUs, that will be noted in the training description and on the registration page. Trainings provided by the CBC may offer CEUs for Social Work, Psychology, or other licensure related to children&apos;s behavioral health.</Text>
       
        <Title order={2} size="h4"><strong>Q: When will I receive my training completion certificate?</strong></Title>
        <Text mb="sm">A: Once the post-training evaluation period has ended for the relevant training, your certificate will be emailed to you within five to ten business days. The post-training evaluation period is typically four business days.</Text>
       
        <Title order={2} size="h4"><strong>Q: Why should I have my camera on during trainings?</strong></Title>
        
        <Text mb="xs">A: To get the most out of your trainings, we encourage you to turn on your camera!</Text>
        <List mb="xs">
          <ListItem>Seeing each other helps create a more overall engaging learning experience.</ListItem>
          <ListItem>Being on camera increases communication between trainers and participants.</ListItem>
          <ListItem>Being on camera increases collaboration between training participants.</ListItem>
          <ListItem>On-camera engagement leads to higher levels of accountability and focus on the training material.</ListItem>
          <ListItem>Being on camera increases cooperation and collaboration within the learning environment.</ListItem>
        </List>
        
        <Title order={2} size="h4"><strong>Q: How do I take the MichiCANS Certification or Re-certification Assessment?</strong></Title>
        <Text mb="sm">A: You can take the MichiCANS Certification or Re-certification Assessment through the Transformational Collaborative Outcomes Management (TCOM) training platform at <a href="http://www.tcomtraining.com">www.tcomtraining.com</a>. For any questions or other support needs related to the assessment exams, go to <a href="mailto:support@tcomtraining.com">support@tcomtraining.com</a>.</Text>
       
        <Title order={2} size="h4"><strong>Q: How do I register for a training through the CBC?</strong></Title>
        <Text mb="sm">A: To register for a training with the CBC you will need to first register with MiLogin. Once you&apos;ve registered you will be able to sign in to your CBC dashboard and access registration links for each available training. For a more in-depth how-to guide with visuals, use this LINK.</Text>
      
        <Title order={2} size="h4"><strong>Q: When will more training dates be available?</strong></Title>
        <Text mb="sm">A: Training dates are periodically added to the <a href="/calendar">calendar</a>. Please reach out to the CBC team at <a href="mailto:MICBC@pcgus.com">MICBC@pcgus.com</a> if you have any questions or feedback on training dates and times.</Text>
      </Container> */}

      <FooterLinksOuter />
    </main>
  );
} 

{/* <Text mb="sm"><strong>Q: What is the MDHHS Capacity Building Center (CBC)?</strong><br/>A: The CBC is a new training resource designed to expand training opportunities for staff at Prepaid Inpatient Health Plans (PIHP), Community Mental Health Services Programs (CMHSP) and MDHHS Children&apos;s Services Administration (CSA). In the future, training may be expanded to other child-serving systems.</Text>
        
<Text mb="sm"><strong>Q: What is the purpose of the CBC?</strong><br/>A: The purpose of the CBC is to provide staff with evidence-based and evidence-informed behavioral health training in areas related to children, youth and families.</Text>

<Text mb="sm"><strong>Q: Who has access to the CBC?</strong><br/>A: All Prepaid Inpatient Health Plans (PIHP) and Community Mental Health Services Programs (CMHSP) staff and their contracted providers, MDHHS Children&apos;s Services Administration (CSA)and other children&apos;s behavioral health professionals in Michigan.</Text>

<Text mb="sm"><strong>Q: What does the CBC provide?</strong><br/>
A: Trainings, materials, information and resources related to children&apos;s behavioral health services. This will include in-person and live virtual trainings.</Text>

<Text mb="sm"><strong>Q: What trainings within children&apos;s behavioral health services are addressed through the CBC?</strong><br/>
A: Initial trainings include:
<List>
  <ListItem>Intensive Care Coordination with Wraparound (ICCW),</ListItem>
  <ListItem>Autism Spectrum Disorder (ASD),</ListItem>
  <ListItem>Michigan Child and Adolescent Needs and Strengths (MichiCANS),</ListItem>
  <ListItem>Intensive Crisis Stabilization Services (ICSS),</ListItem>
  <ListItem>Waiver for Children with Serious Emotional Disturbance (SEDW)and</ListItem>
  <ListItem>Children&apos;s Waiver Program (CWP).</ListItem>
</List>
Additional trainings will be added in the future.</Text>

<Text mb="sm"><strong>Q: How can the CBC support my work as a behavioral health provider to children, youth and families?</strong><br/>A: The CBC offers accessible training opportunities (live in-person and live virtual) and increased opportunities for obtaining hours toward the Children&apos;s Diagnostic and Treatment Service (CTDS )  (make this a hyperlink to the explanation on CTDS hours)  program requirements and Continuing Education (CE) credits for licensure. Enhanced learning experiences, networking opportunities and supports will also be available through communities of practice.</Text>

<Text mb="sm"><strong>Q: How do I know if a specific training offered through the CBC is approved for Continuing Education Units (CEUs)?</strong><br/>A: If a training is approved for CEUs, that will be noted in the training description and on the registration page. Trainings provided by the CBC may offer CEUs for Social Work, Psychology, or other licensure related to children&apos;s behavioral health.</Text>

<Text mb="sm"><strong>Q: When will I receive my training completion certificate?</strong><br/>A: Once the post-training evaluation period has ended for the relevant training, your certificate will be emailed to you within five to ten business days. The post-training evaluation period is typically four business days.</Text>

<Text mb="sm"><strong>Q: Why should I have my camera on during trainings?</strong><br/>A: To get the most out of your trainings, we encourage you to turn on your camera!
<List>
  <ListItem>Seeing each other helps create a more overall engaging learning experience.</ListItem>
  <ListItem>Being on camera increases communication between trainers and participants.</ListItem>
  <ListItem>Being on camera increases collaboration between training participants.</ListItem>
  <ListItem>On-camera engagement leads to higher levels of accountability and focus on the training material.</ListItem>
  <ListItem>Being on camera increases cooperation and collaboration within the learning environment</ListItem>
</List>
</Text>

<Text mb="sm"><strong>Q: How do I take the MichiCANS Certification or Re-certification Assessment?</strong><br/>A: You can take the MichiCANS Certification or Re-certification Assessment through the Transformational Collaborative Outcomes Management (TCOM) training platform at www.tcomtraining.com. For any questions or other support needs related to the assessment exams, go to support@tcomtraining.com.</Text>

<Text mb="sm"><strong>Q: How do I register for a training through the CBC?</strong><br/>A: To register for a training with the CBC you will need to first register with MiLogin. Once you&apos;ve registered you will be able to sign in to your CBC dashboard and access registration links for each available training. For a more in-depth how-to guide with visuals, use this LINK.</Text>

<Text mb="sm"><strong>Q: When will more training dates be available?</strong><br/>A: Training dates are periodically added to the calendar. Please reach out to the CBC team using the contact form here if you have any questions or feedback on training dates and times.</Text> */}