"use client";
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Container, Group, Burger, Box, Anchor, Menu, Drawer, ScrollArea, Divider, Stack, Collapse, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './HeaderOuter.module.css';
import { Logo } from '../Logo/logo';
import { usePathname } from 'next/navigation';

const topLinks = [
  { link: '/about', label: 'About' },
  { link: '/faqs', label: 'FAQs' },
  { link: '/testimonials', label: 'Testimonials' },
  { link: '/contact', label: 'Contact' },
];
const links = [
  {
    label: 'Training',
    links: [
      { link: '/training', label: 'Training Overview' },
      { link: '/training/michicans', label: 'MichiCANS' },
      { link: '/training/iccw', label: 'ICCW' },
      { link: '/training/asd', label: 'ASD' },
      { link: '/training/sedw', label: 'SEDW' },
      { link: '/training/cwp', label: 'CWP' },
    ],
  },
  { link: '/calendar', label: 'Calendar' },
  { link: '/resources', label: 'Resources' },
  { link: '/careers', label: 'Careers' },
  { link: '/announcements', label: 'Announcements' },
];

export function HeaderOuter() {
  const pathname = usePathname();
  const [openedSection, setOpenedSection] = useState(() => {
    return (
      links.find((link) =>
        link.links?.some((sub) => pathname.startsWith(sub.link))
      )?.label || null
    );
  });
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const secondaryItems = topLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  const items = links.map((link) => {
    const subItems = link.links?.map((item, index) => (
      <Menu.Item 
      key={item.link}
      component="a"
      href={item.link}
      className={classes.subLink}
      data-active={index === active}
      onClick={(event) => {
        setActive(index);
      }}
      >
        {/* <Link 
        href={item.link}
          className={classes.subLink}
          data-active={index === active}
          onClick={(event) => {
            setActive(index);
          }}
        > */}
          {item.label}
        {/* </Link> */}
      </Menu.Item>
    ));

    if (subItems) {
      return (
        <Menu
          key={link.label}
          trigger="click"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <strong>{link.label} </strong><IconChevronDown size={14} stroke={1.5} />
            </a>
          </Menu.Target>
          <Menu.Dropdown className={classes.subMenu}
          >{subItems}</Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        <strong>{link.label}</strong>
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <Anchor
            href="/"
            underline="never"
            c="dark.7"
            fw={500}
            fz="lg">
            <Logo />
          </Anchor>

          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" aria-label="Toggle navigation menu" />
          <Box className={classes.links} visibleFrom="sm">
            <Group justify="flex-end">{secondaryItems}</Group>
            <Group gap={0} justify="flex-end" >
              {items}
            </Group>
          </Box>
        </div>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          <Stack gap="xs" px="md">
            {links
              .filter((link) => link.links)
              .map((link) => {
                const isOpen = openedSection === link.label;

                return (
                  <Box key={link.label}>
                    <UnstyledButton
                     aria-expanded={isOpen}
                     aria-controls={`section-${link.label}`}
                     id={`control-${link.label}`}
                      type="button"
                      className={classes.link}
                      onClick={() => setOpenedSection(isOpen ? null : link.label)}
                      data-active={isOpen || undefined}
                      style={{
                        width: '100%', textAlign: 'left', display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <strong>{link.label}</strong>
                      <IconChevronDown
                        size={16}
                        style={{
                          transition: 'transform 200ms ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </UnstyledButton>

                    <Collapse in={isOpen} id={`section-${link.label}`} aria-labelledby={`control-${link.label}`}>
                      <Stack gap="xs" px="sm" pt="xs">
                        {link.links!.map((sub) => (
                          <Anchor
                            key={sub.link}
                            href={sub.link}
                            onClick={close}
                            className={classes.link}
                            data-active={pathname.startsWith(sub.link) || undefined}
                          >
                            {sub.label}
                          </Anchor>
                        ))}
                      </Stack>
                    </Collapse>
                  </Box>
                );
              })}

            <Stack gap="xs">
              {links
                .filter((link) => !link.links)
                .map((link) => (
                  <Anchor
                    key={link.label}
                    href={link.link}
                    onClick={close}
                    className={classes.link}
                  >
                    <strong>{link.label}</strong>
                  </Anchor>
                ))}
            </Stack>

            <Divider my="sm" />

            <Stack gap="xs">
              {topLinks.map((item) => (
                <Anchor
                  key={item.label}
                  href={item.link}
                  onClick={close}
                  className={classes.secondaryLink}
                >
                  {item.label}
                </Anchor>
              ))}
            </Stack>
          </Stack>
        </ScrollArea>
      </Drawer>

    </header>
  );
}
