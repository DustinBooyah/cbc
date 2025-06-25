import { Container, Title, List, ListItem, Accordion, AccordionItem, AccordionControl, AccordionPanel, Text } from '@mantine/core';
import classes from './FAQAccordion.module.css';

const faqs = [
  {
    question: "What is the MDHHS Capacity Building Center (CBC)?",
    answer:
      "The CBC is a new training resource designed to expand training opportunities for staff at Prepaid Inpatient Health Plans (PIHP), Community Mental Health Services Programs (CMHSP) and MDHHS Children's Services Administration (CSA). In the future, training may be expanded to other child-serving systems.",
  },
  {
    question: "What is the purpose of the CBC?",
    answer:
    "The purpose of the CBC is to provide staff with evidence-based and evidence-informed behavioral health training in areas related to children, youth and families.",
  },
  {
    question: "Who has access to the CBC?",
    answer:"All Prepaid Inpatient Health Plans (PIHP) and Community Mental Health Services Programs (CMHSP) staff and their contracted providers, MDHHS Children's Services Administration (CSA) and other children's behavioral health professionals in Michigan.",
  },
  {
    question: "What does the CBC provide?",
    answer:
      "Trainings, materials, information and resources related to children's behavioral health services. This will include in-person and live virtual trainings.",
  },
  {
    question: "What trainings within children's behavioral health services are addressed through the CBC?",
    answer: (
      <>
        <Text>A: Initial trainings include:</Text>
        <List mb="xs" mt="xs">
          <ListItem>Intensive Care Coordination with Wraparound (ICCW),</ListItem>
          <ListItem>Autism Spectrum Disorder (ASD),</ListItem>
          <ListItem>Michigan Child and Adolescent Needs and Strengths (MichiCANS),</ListItem>
          {/* <ListItem>Intensive Crisis Stabilization Services (ICSS),</ListItem> */}
          <ListItem>Waiver for Children with Serious Emotional Disturbance (SEDW) and</ListItem>
          <ListItem>Children&apos;s Waiver Program (CWP).</ListItem>
        </List>
      </>
    ),
  },
  {
    question: "How can the CBC support my work as a behavioral health provider to children, youth and families?",
    answer:
      "The CBC offers accessible training opportunities (live in-person and live virtual) and increased opportunities for obtaining hours toward the Children's Diagnostic and Treatment Service (CTDS) program requirements and Continuing Education (CE) credits for licensure. Enhanced learning experiences, networking opportunities and supports will also be available through communities of practice.",
  },
  {
    question: "How do I know if a specific training offered through the CBC is approved for Continuing Education Units (CEUs)?",
    answer:
      "If a training is approved for CEUs, that will be noted in the training description and on the registration page. Trainings provided by the CBC may offer CEUs for Social Work, Psychology, or other licensure related to children's behavioral health.",
  },
  {
    question: "When will I receive my training completion certificate?",
    answer:
      "Once the post-training evaluation period has ended for the relevant training, your certificate will be emailed to you within five to ten business days. The post-training evaluation period is typically four business days.",
  },
  {
    question: "Why should I have my camera on during trainings?",
    answer: (
      <>
        <Text mb="xs">
          To get the most out of your trainings, we encourage you to turn on your camera!
        </Text>
        <List mb="xs">
          <ListItem>Seeing each other helps create a more engaging learning experience.</ListItem>
          <ListItem>Being on camera increases communication between trainers and participants.</ListItem>
          <ListItem>Being on camera increases collaboration between training participants.</ListItem>
          <ListItem>On-camera engagement leads to higher levels of accountability and focus on the training material.</ListItem>
          <ListItem>Being on camera increases cooperation and collaboration within the learning environment.</ListItem>
        </List>
      </>
    ),
  },
    {
    question: "How do I take the MichiCANS Certification or Re-certification Assessment?",
    answer: (
      <>
         <Text mb="sm">A: You can take the MichiCANS Certification or Re-certification Assessment through the Transformational Collaborative Outcomes Management (TCOM) training platform at <a href="http://www.tcomtraining.com">www.tcomtraining.com</a>. For any questions or other support needs related to the assessment exams, go to <a href="mailto:support@tcomtraining.com">support@tcomtraining.com</a>.</Text>
      </>
    ),
  },
    {
    question: 'How do I register for a training through the CBC?',
    answer:
      "To register for a training with the CBC you will need to first register with MiLogin. Once you've registered you will be able to sign in to your CBC dashboard and access registration links for each available training.",
  },
    {
    question: 'When will more training dates be available?',
     answer: (
      <>
         <Text mb="sm">A: Training dates are periodically added to the <a href="/calendar">calendar</a>. Please reach out to the CBC team at <a href="mailto:MICBC@pcgus.com">MICBC@pcgus.com</a> if you have any questions or feedback on training dates and times.</Text>
      </>
    ),
  },
];
export function FAQAccordion() {
  const items = faqs.map((item) => (
    <AccordionItem key={item.question} value={item.question} className={classes.item}>
      <AccordionControl><Title order={4}>{item.question}</Title></AccordionControl>
      <AccordionPanel>{item.answer}</AccordionPanel>
    </AccordionItem>
  ));

  return (

    <Container size="md" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>


    <Accordion variant="separated">
      {items}
    </Accordion>
    </Container>
  );
}