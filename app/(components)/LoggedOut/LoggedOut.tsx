import { Container, Title, Space, Button, Group } from '@mantine/core';
import classes from './LoggedOut.module.css';
import Link from 'next/link';

export function LoggedOut() {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title order={1}  className={classes.title}>You have successfully logged out.</Title>
          <Space h="xl" />

          <Group justify="center">
            <Button variant="filled" size="lg" component={Link} href="/">Take me back to home page</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}