'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import {
  Container,
  Paper,
  Title,
  Text,
  Button,
  Stack,
  Center,
  Box,
} from '@mantine/core';

export default function UnauthorizedPage() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Container size={420} my={100}>
      <Center style={{ minHeight: '100vh' }}>
        <Paper withBorder shadow="md" p={30} radius="md" w="100%">
          <Stack align="center">
            <Title order={2} ta="center">
              Access Denied
            </Title>
            <Text size="sm" c="dimmed" ta="center">
              You don&apos;t have permission to access this resource.
            </Text>
            {user && (
              <Text size="sm" c="dimmed" ta="center">
                Your role: <Text component="span" fw={500}>{user.role}</Text>
              </Text>
            )}
          </Stack>
          
          <Stack mt="xl">
            <Button 
              onClick={() => router.push('/dashboard')}
              fullWidth
              size="md"
            >
              Go to Dashboard
            </Button>
            <Button 
              onClick={() => router.back()}
              fullWidth
              size="md"
              variant="outline"
            >
              Go Back
            </Button>
          </Stack>
        </Paper>
      </Center>
    </Container>
  );
}