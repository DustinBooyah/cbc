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
    course: "ICCW New Hire Orientation",
    audience: "Intensive Care Coordination w/ Wraparound (ICCW)",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "This training is mandatory for all new hires working as ICCW Coordinators.",
    CEUsAvailable: "Yes: American Psychological Association (APA) 3 hours",
    prerequisites: ["ICCW New Hire Orientation"],
    CTDSHours: "3 Hours",
    image: "/training-iccw-new-hire-orientation.webp",
  },
  {
    id: 2,
    course: "ICCW Certification Training",
    audience: "Intensive Care Coordination w/ Wraparound (ICCW)",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "9 hours (3 hours x 3 days)",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "This training is designed to provide participants the knowledge and skills to purposefully deliver Intensive Care Coordination with Wraparound to youth and their families enrolled in these services. This training is mandatory for all provisionally-approved or previously Wraparound Certified staff to gain ICCW Certification. ICCW Certification training consists of three, half-day sessions. Participants must attend all three sessions of the  training in order to become ICCW Certified.",
    CEUsAvailable: "Yes: American Psychological Association (APA) 9 hours",
    prerequisites: ["ICCW New Hire Orientation"],
    CTDSHours: "9 Hours",
    image: "/training-iccw-cert-training.webp",
  },
];

export function CatalogICCW() {
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

