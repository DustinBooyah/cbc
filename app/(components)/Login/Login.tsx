"use client";
import {
  Anchor,
  Button,
  Box,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

export default function Login() {
  const handleLoginRedirect = () => {
    window.location.href = '/api/auth/login';
  };

  return (
    <Container size={420} my={200}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Title order={2} ta="center" mt="md" size="h1">
          <strong>Hi.</strong>
        </Title>
        <Button onClick={handleLoginRedirect} fullWidth mt="xl" size="md">
          Sign in with MILogin
        </Button>
      </Paper>

      <Box my="xl">
        <Title ta="center" order={4}>
          <strong>If You&apos;re a State of Michigan Employee</strong>
        </Title>
        <Text ta="center" mt="lg">
          Please login through the State MILogin, and search for the MDHHS Capacity Building Center to add to your Online Services page.
        </Text>
      </Box>
    </Container>
  );
}

// "use client"
// import {
//   Button,
//   Box,
//   Container,
//   Paper,
//   Text,
//   Title,
// } from '@mantine/core';
// import Link from 'next/link'

// export default function Login() {
//   return (
//     <Container size={420} my={200}>
//       <Paper withBorder shadow="md" p={30} mt={30} radius="md">
//         <Title order={2} ta="center" mt="md" size="h1" >
//           <strong>Hi.</strong>
//         </Title>
//         <Link href="/api/auth/login" passHref>
//           <Button fullWidth mt="xl" size="md">
//             Sign in with MILogin
//           </Button>
//         </Link>

//       </Paper>

//       <Box my="xl">
//         <Title ta="center" order={4}>
//           <strong>If You&apos;re a State of Michigan Employee</strong>
//         </Title>
//         <Text ta="center" mt="lg">
//           Please login through the State MILogin, and search for the MDHHS Capacity Building Center to add to your Online Services page.
//         </Text>
//       </Box>


//     </Container>
//   );
// }