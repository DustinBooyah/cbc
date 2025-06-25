'use client'
import { useState } from 'react';
import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Image,
  Button,
  Badge,
  CardSection,
  Divider,
  List,
  ListItem,
  Modal,
  Container
} from '@mantine/core';
import classes from './TrainingCatalogCards.module.css';
interface Training {
  id: number;
  course: string;
  audience: string;
  format: string;
  location: string;
  duration: string;
  specialInstructions: string;
  description: string;
  CEUsAvailable: string;
  prerequisites: string[];
  CTDSHours: string;
  image: string;
}
const training: Training[] = [
  {
    id: 1,
    course: "Assessment & Management of ASD in Transitional Age Youth and Adults",
    audience: "Autism Spectrum Disorder (ASD)",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access.",
    description: "This webinar will provide an overview of the best practice methods and tools for assessing and managing autism for transitional-aged youth and adults, including:• Discussing common comorbidities • Reviewing diagnostic and management challenges • Presenting methods for guiding individuals and families through the transition to adulthood.",
    CEUsAvailable: "Yes: American Psychological Association (APA) 3 hours",
    prerequisites: [],
    CTDSHours: "3 Hours",
    image: "/training-asd-transitional-age-youth.webp",
  },
  {
    id: 2,
    course: "Disentangling Childhood Trauma and ASD: Differential & Comorbid Presentations",
    audience: "Autism Spectrum Disorder (ASD)",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access.",
    description: "This webinar will cover useful evaluation components and tools in the assessment of ASD and childhood trauma. The presentation will include differences and commonalities in symptom presentation between ASD and trauma.",
    CEUsAvailable: "Yes: American Psychological Association (APA) 3 hours",
    prerequisites: [],
    CTDSHours: "3 Hours",
    image: "/training-asd-trauma.webp",
  },
  {
    id: 3,
    course: "Understanding Neurodiversity & Conducting Neuroaffirming Evaluations",
    audience: "Autism Spectrum Disorder (ASD)",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access.",
    description: "This webinar will cover important topics in neurodiversity relevant to comprehensive autism evaluations across the lifespan, including: • Discussing methods for making the evaluation process comfortable and empowering. • Reviewing case examples for writing helpful reports and recommendations using affirming language that focuses on differences rather than deficits.",
    CEUsAvailable: "Yes: American Psychological Association (APA) 3 hours",
    prerequisites: [],
    CTDSHours: "3 Hours",
    image: "/training-asd-understanding-neurodiversity.webp",
  },
  {
    id: 4,
    course: "Advanced Use of the Autism Diagnostic Observation Schedule - Second Edition (ADOS-2) in Comprehensive Autism Evaluations",
    audience: "Autism Spectrum Disorder (ASD)",
    format: "In-Person",
    location: "South Grand Building, 333 S. Grand Ave., Lansing, MI (Grand Conference Room)",
    duration: "6 Hours",
    specialInstructions: "You must register and receive confirmation to attend. This training is limited to 40 people.",
    description: "This full day, in-person workshop will include administration tips and strategies, video-based coding practice, data integration and helpful feedback practices, and ample time for questions and case discussion. Space is limited to 40 participants. This workshop will prepare participants to: • List the components of a best practice ASD evaluation. • State two ADOS - 2 administration practices that result in reliable administration. • Explain observation opportunities for key ADOS - 2 coding variables. • Integrate data from at least three methods to make ASD diagnostic decisions. • Demonstrate multiple ways to explain ASD to caregivers and individuals. • Apply skills for giving affirming and helpful feedback and recommendations.",
    CEUsAvailable: "Yes: American Psychological Association (APA) 3 hours",
    prerequisites: [],
    CTDSHours: "6 Hours",
    image: "/training-asd-advanced-use-of-autism-diag-obv-sched.webp",
  },

];

export function CatalogASD() {
  const [opened, setOpened] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);

  const openModal = (training: Training) => {
    setSelectedTraining(training);
    setOpened(true);
  };

  const closeModal = () => {
    setOpened(false);
    setSelectedTraining(null);
  };

  const cards = training.map((training) => (
    <Card shadow="sm" key={training.id} withBorder className={classes.card}>
      <CardSection>
        <Image
          src={training.image}
          alt={training.course} 
          height={150}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </CardSection>
      <Badge className={classes.audience} size="md" variant="dot">
        {training.format}
      </Badge>
      <CardSection className={classes.section}>
        <Text className={classes.course} component="h2">
          <strong>{training.course}</strong>
        </Text>
      </CardSection>
      <CardSection className={classes.footer}>
        <Button fullWidth justify="center" radius="md" onClick={() => openModal(training)}>
          View Details
        </Button>
      </CardSection>
    </Card>
  ));

  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }} spacing="xl">
        {cards}
      </SimpleGrid>

      <Modal 
      classNames={{
        title: classes.label,
      }}
      opened={opened} 
      onClose={closeModal} 
      title={selectedTraining?.course} 
      size="lg"
      >
        {selectedTraining && (
          <>
           {(() => {
                const parts = selectedTraining.description.split(/•/);
                const firstParagraph = parts.shift()?.trim();
                return (
                  <>
                    {firstParagraph && <Text size="sm">{firstParagraph}</Text>}
  
                    {parts.length > 0 && (
                      <List size="sm">
                        {parts.map((item, index) =>
                          item.trim() ? (
                            <ListItem key={index} aria-label={`Detail: ${item.trim()}`}>
                              {item.trim()}
                            </ListItem>
                          ) : null
                        )}
                      </List>
                    )}
                  </>
                );
              })()}
            <Divider my="sm" />
            <Text size="sm" component="h4"><strong>Prerequisites</strong></Text>
            {selectedTraining.prerequisites.length > 0 ? (
              <List size="sm" pr="lg">
                {selectedTraining.prerequisites.map((prereq, index) => (
                  <ListItem key={index}>{prereq}</ListItem>
                ))}
              </List>
            ) : (
              <Text size="sm">N/A</Text>
            )}
            <Text size="sm"><strong>Location - </strong>{selectedTraining.location}</Text>
            <Text size="sm"><strong>Category - </strong>{selectedTraining.audience}</Text>
            <Text size="sm"><strong>Special Instructions - </strong>{selectedTraining.specialInstructions}</Text>
            <Text size="sm"><strong>Duration - </strong>{selectedTraining.duration}</Text>
            <Text size="sm"><strong>CEUs Available - </strong>{selectedTraining.CEUsAvailable}</Text>
            <Text size="sm"><strong>CTDS Hours - </strong>{selectedTraining.CTDSHours}</Text>
          </>
        )}
      </Modal>
    </>
  );
}

