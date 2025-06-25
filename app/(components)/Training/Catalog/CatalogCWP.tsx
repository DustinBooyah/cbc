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
    course: "CWP Prescreen Submission Basics",
    audience: "Children's Waiver Program",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "90 minutes",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "These webinars are intended to address the identified needs of new prescreen workers.  Others are welcome and encouraged to attend as a refresher.  This introductory  training will cover prescreen basics for those working with families to complete Children’s Waiver Program prescreens; the content will be geared to those who have worked with prescreens for less than a year or who have completed fewer than five prescreen submissions.  The session will cover:•	Questions families most frequently ask:  Helping families to understand the Children’s Waiver Program prescreen process•	Documenting facts to support a developmental disability•	Documenting facts to support habilitative service needs•	Six month and full new annual prescreen submission requirements•	Scoring feedback to review:  Prescreen Scoring Comment sections and Prescreen Hold emails•	Monthly prescreen invitation to apply process and cut off dates•	An introduction to the Priority Weighing List process and the Priority Weighing Scoring Criteria•	Steps to complete if you receive an invitation to apply email for a Waiver",
    CEUsAvailable: "N/A",
    prerequisites: [],
    CTDSHours: "TBD",
    image: "/training-cwp-prescreen-submission-basics.webp",
  },
  {
    id: 2,
    course: "CWP Program Decision Guide/Category of Care",
    audience: "Children's Waiver Program",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "60 minutes",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "These webinars provide training in the core skills needed to determine the appropriate, medically necessary range of hours for Community Living Supports (CLS) as defined in the Medicaid Provider Manual. These skills include assessment of each child’s needs, identification of significant family resources to meet those needs, and assessment of the appropriate range of hours to authorize using the Decision Guide Table process.  As a result of this webinar, participants will also be able to meet standards reviewed during Children’s Waiver Program Site Reviews including writing a Category of Care narrative for each child that includes four required elements.",
    CEUsAvailable: "N/A",
    prerequisites: [],
    CTDSHours: "TBD",
    image: "/training-cwp-category-of-care.webp",
  },
  {
    id: 3,
    course: "CWP Community of Practice",
    audience: "Children's Waiver Program",
    format: "Live-Virtual",
    location: "Zoom",
    duration: "60 minutes",
    specialInstructions: "You must register to gain access. This training is interactive and participants should plan to have their cameras on and engage in breakout groups.",
    description: "CWP Commumity of Practice sessions (formerly known as CWP Technical Assistance) are for all staff and supervisors that work with and support the CWP. The CWP CoP sessions will provide the opportunity for staff to come together to ask questions, share information and practice, and receive specific guidance and support on implementing the CWP from MDHHS staff and colleagues in the field.Each session will cover different topics and materials.",
    CEUsAvailable: "N/A",
    prerequisites: [],
    CTDSHours: "N/A",
    image: "/training-cwp-community-of-practice.webp",
  },
];

export function CatalogCWP() {
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

