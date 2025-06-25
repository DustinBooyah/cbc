import { notFound } from 'next/navigation';
import { Text, Title, List, ListItem, Divider, Avatar, Paper, Image, Group, Container, Grid, GridCol, Stack, Card } from '@mantine/core';
import Link from 'next/link';
import { trainingData } from '@/app/lib/trainingData';
import {
  IconMapPin,
  IconStopwatch,
  IconUser,
} from '@tabler/icons-react';

export function generateStaticParams() {
  return trainingData.map(t => ({ id: t.id.toString() }));
}

export default async function TrainingDetailPage ({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15, params must be awaited
  const resolvedParams = await Promise.resolve(params);
  
  const id = resolvedParams.id;
  
  const selectedTraining = trainingData.find(t => t.id === Number(id));
  if (!selectedTraining) return notFound();

  return (
    <Container fluid>
      <Title order={1}>Catalog</Title>
      <Divider my="md" />

      <Title order={2}>{selectedTraining.course}</Title>
      <Link href="/dashboard/catalog">
        <Text mb="sm" size="sm" inherit>
          ← Back to Catalog
        </Text>

      </Link>
      <Image src={selectedTraining.image} alt={selectedTraining.course} height={200} mb="md" />

      <Grid grow>
        <GridCol span={9}>
          <Text mb="sm">{selectedTraining.description}</Text>
          <Title order={3}>Special Instructions</Title>
          <Text>{selectedTraining.specialInstructions}</Text>

          <Divider my="sm" />
          <Text fw={600}>Prerequisites:</Text>
          {selectedTraining.prerequisites.length ? (
            <List>
              {selectedTraining.prerequisites.map((p, i) => <ListItem key={i}>{p}</ListItem>)}
            </List>
          ) : (
            <Text mb="sm">N/A</Text>
          )}
          <Text><strong>CEUs Available:</strong> {selectedTraining.CEUsAvailable}</Text>
          <Text><strong>CTDS Hours:</strong> {selectedTraining.CTDSHours}</Text>
        </GridCol>
        <GridCol span={3}>
          <Card shadow="sm" padding="lg" >

            <Stack>
              <Group wrap="nowrap">
                <IconUser size={32} stroke={1.5} />
                <div>
                  <Text size="sm"><strong>Category</strong></Text>
                  <Text>
                    {selectedTraining.audience}
                  </Text>
                </div>
              </Group>
              <Divider />
              <Group wrap="nowrap">
                <IconMapPin size={32} stroke={1.5} />
                <div>
                  <Text size="sm"><strong>Location</strong></Text>
                  <Text>
                    {selectedTraining.location}
                  </Text>
                </div>
              </Group>
              <Divider />
              <Group wrap="nowrap">
                <IconStopwatch size={32} stroke={1.5} />
                <div>
                  <Text size="sm"><strong>Duration</strong></Text>
                  <Text>
                    {selectedTraining.duration}
                  </Text>
                </div>
              </Group>

            </Stack>
          </Card>
        </GridCol>
      </Grid>



    </Container>
  );
}
