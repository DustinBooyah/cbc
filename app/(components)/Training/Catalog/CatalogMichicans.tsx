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
    course: "Transformational Collaborative Outcomes Management (TCOM) Orientation",
    audience: "MichiCANS",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3.5 hours",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "This is the first of two trainings required for MichiCANS certification.",
    CEUsAvailable: "N/A",
    prerequisites: [],
    CTDSHours: "3.5 Hours",
    image: "/training-michicans-tcom-orientation.webp",
  },
  {
    id: 2,
    course: "MichiCANS Overview",
    audience: "MichiCANS",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3.5 Hours",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "This is the second of two trainings required for MichiCANS certification.",
    CEUsAvailable: "N/A",
    prerequisites: ["Transformational Collaborative Outcomes Management(TCOM) Orientation(MichiCANS)"],
    CTDSHours: "3.5 Hours",
    image: "/training-michicans-action-planning.webp",
  },
  {
    id: 3,
    course: "MichiCANS Annual Certification Booster Training",
    audience: "MichiCANS",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "To retain certification in the MichiCANS, staff must pass an annual recertification assessment. There are no training requirements prior to taking the annual recertification. This optional Booster training is offered to those individuals who (1) are already trained in the MichiCANS and (2) are interested in more opportunity for practice and application of the MichiCANS to prepare for recertification.The training will include use of vignettes and practice opportunities to support participants in achieving greater confidence in the use of the MichiCANS tools. Booster training objectives include: • Increase understanding of the certification and recertification process  • Increase accuracy and efficiency in the use of the MichiCANS reference guides and rating sheets • Enhance ability to communicate the youth / family’s story(needs / strengths)   • Increase confidence in the six Communimetric Principles",
    CEUsAvailable: "N/A",
    prerequisites: ["Transformational Collaborative Outcomes Management (TCOM) Orientation (MichiCANS)", "MichiCANS Overview", "MichiCANS Certification", "MichiCANS Action Planning"],
    CTDSHours: "3 Hours",
    image: "/training-michicans-annual-recertification-booster.webp",
  },
  {
    id: 4,
    course: "MichiCANS Action Planning",
    audience: "MichiCANS",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "This training is required for clinical staff and clinical supervisors after successful completion of MichiCANS Certification (TCOM Orientation, MichiCANS Overview, and successful completion of the vignette-based assessment).",
    CEUsAvailable:"N/A",
    prerequisites: ["Transformational Collaborative Outcomes Management (TCOM) Orientation (MichiCANS)", "MichiCANS Overview"],
    CTDSHours: "3 Hours",
    image: "/training-michicans-action-planning.webp",
  },
  {
    id: 5,
    course: "MichiCANS Supervisory Training",
    audience: "MichiCANS",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "3 Hours",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "This training is required for supervisors who oversee staff who will be completing the MichiCANS. This training is taken after successful completion of MichiCANS Certification (TCOM Orientation, MichiCANS Overview, and successful completion of the vignette-based assessment) and Action Planning.",
    CEUsAvailable: "N/A",
    prerequisites: ["Transformational Collaborative Outcomes Management (TCOM) Orientation (MichiCANS)", "MichiCANS Overview", "MichiCANS Certification", "MichiCANS Action Planning"],
    CTDSHours: "3 Hours",
    image: "/training-michicans-supervisory-training.webp",
  },
  {
    id: 6,
    course: "MichiCANS Supervisor Community of Practice Meetings",
    audience: "MichiCANS",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "90 mins",
    specialInstructions: "You must register to gain access. Community of Practice meetings are interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "MichiCANS Supervisor Community of Practice meetings are offered twice per month. These meetings are for clinical supervisors and provide the opportunity to come together in a learning community with a focus on building practical skills to support meaningful use of the MichiCANS across the state and at the organizational level. The primary audience for this offering is clinical supervisors who directly oversee the clinical use of the MichiCANS.",
    CEUsAvailable: "N/A",
    prerequisites: [],
    CTDSHours: "N/A",
    image: "/training-michicans-comm-of-practice.webp",
  },
];

export function CatalogMichicans() {
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

