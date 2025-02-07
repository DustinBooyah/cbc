'use client'
import { useState } from 'react';
import { Box, Container, Group, Button, Burger, Anchor, Drawer, ScrollArea, Divider, rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './HeaderSimple.module.css';
import { Logo } from '../Logo/logo';

const data = [
  // { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/programs', label: 'Programs' },
  { link: '/trainings', label: 'Trainings' },
  { link: '/parents', label: 'Parents' },
  { link: '/partners', label: 'Partners' },
  { link: '/faq', label: 'FAQ' },
];

export function HeaderSimple() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(data[0].link);

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      {item.label}
    </Link>
  ));

  return (
    <Box>

    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
      <Link href="/" >
      <Logo/>
      </Link>

        <Group gap={5} visibleFrom="sm">
          {links}
            <Button
              variant="light"
              component={Link}
              size="xs"
              href='https://forms.office.com/Pages/ResponsePage.aspx?id=wxCx2SVMeUO5euJIk4zBeyH9adNOLmtNhzNAWG4ZsVdUOUxNMTVHVjc3T08xSDJPWjRPUzE3VFhSUy4u&embed=true'
            >
              Request TA
            </Button>
        </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
      </Container>
    </header>

     <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {links}
          <Button
            variant="light"
            component={Link}
            href='https://forms.office.com/Pages/ResponsePage.aspx?id=wxCx2SVMeUO5euJIk4zBeyH9adNOLmtNhzNAWG4ZsVdUOUxNMTVHVjc3T08xSDJPWjRPUzE3VFhSUy4u&embed=true'
          >
            Request TA
          </Button>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}