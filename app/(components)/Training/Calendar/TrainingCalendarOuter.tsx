import { Title, List, Text, ListItem, ThemeIcon, Grid, GridCol, Container, Button, Image } from '@mantine/core';
import GoogleCalendar from '../../GoogleCalendar/GoogleCalendar';

export function TrainingCalendar() {

  return (

    <Container size="xl" mt="xl">
      <Title order={1} mb='md'>Calendar</Title>

      <Text size="md" mb='xs'>Navigate your professional development journey with our training calendar. Stay informed about key dates for training and never miss a chance to grow your skills and advance your professional potential.</Text>

      <Text size="md" mb='xs'>Available trainings are listed in the calendar below and are updated frequently. If you would like more information about a specific training, please <a href="/training">visit the Training Page.</a></Text>

      <Title order={2} mt="lg" mb="sm">How to use this Calendar </Title>

      <Text size="md" mb='xs'>Scroll through the calendar to view available training dates and times.</Text>

      <Text size="md" mb='xs'>Once you have found your preferred date and time, select the Google calendar event to view the registration link. All virtual trainings are conducted via Zoom and require registration via the Zoom link provided. </Text>

      <Text size="md" mb='xs'>For more details on how to register for our training events, use this LINK. [link to How to guide]</Text>
      <GoogleCalendar />
    </Container>
  );
}