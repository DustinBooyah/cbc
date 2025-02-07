"use client";
import { useState } from 'react';
import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './DoubleHeader.module.css';
import Image from 'next/image';

const userLinks = [
  { link: '/https://forms.office.com/Pages/ResponsePage.aspx?id=wxCx2SVMeUO5euJIk4zBeyH9adNOLmtNhzNAWG4ZsVdUOUxNMTVHVjc3T08xSDJPWjRPUzE3VFhSUy4u&embed=true', label: 'Request TA' },
];

const mainLinks = [
  { link: '/about', label: 'About' },
  { link: '/programs', label: 'Programs' },
  { link: '/trainings', label: 'Trainings' },
  { link: '/parents', label: 'Parents' },
  { link: '/partners', label: 'Partners' },
  { link: '/faq', label: 'FAQ' },
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(mainLinks[0].link);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={item.label === active || undefined}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
      <Anchor href="/">
      <Image src="/logo-coe.gif" alt="Large Image" height={40} width={80} />
      </Anchor>        <Box className={classes.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}