"use client"
import { AppShell, Burger, Group, AppShellMain, Anchor, Menu, Container, Text, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavDashLeft } from '../Dashboard/Navigation/NavDashLeft';
import { LogoDash } from '../Logo/logoDash';
import { NavDashUserMenu } from '../Dashboard/Navigation/NavDashUserMenu';
import classes from './Navigation/NavDashUserMenu.module.css';

function DashboardLayout({ children }:any) {
  const [opened, { toggle }] = useDisclosure();

  return (
    
    <AppShell
      header={{ height: 57 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>

        <Group justify="space-between">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Anchor 
                href="/"
                underline="never" 
                c="dark.7"
                fw={500}
                fz="lg">
                <LogoDash /> 
            </Anchor>
            <NavDashUserMenu/>
        </Group>

      </AppShell.Header>
      <AppShell.Navbar>
          <NavDashLeft/>
      </AppShell.Navbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
export default DashboardLayout;