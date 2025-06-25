import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconChevronRight,
  IconLogout
} from '@tabler/icons-react';
import { Box, Group, UnstyledButton, Text, Collapse } from '@mantine/core';
import classes from './NavDashLeft.module.css';

interface LinksGroupProps {
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  isOpen?: boolean;
  setOpenLabel?: (label: string | null) => void;
  currentOpenLabel?: string | null;
  pathname?: string;
}

export function LinksGroup({
  label,
  links,
  link,
  isOpen,
  setOpenLabel,
  currentOpenLabel,
  // pathname = ''
}: LinksGroupProps) {
  const pathname = usePathname();
  const hasLinks = Array.isArray(links);
  const nestedActive = hasLinks && links?.some((l) => pathname.startsWith(l.link));
  // const isActive = pathname === link || nestedActive;
  const isActive = (link && pathname.startsWith(link)) || nestedActive;

  const handleClick = () => {
    if (isOpen) {
      setOpenLabel?.(null);
    } else {
      setOpenLabel?.(label);
    }
  };

  const items = (hasLinks ? links : []).map((l) => {
    // const isSubLinkActive = pathname === l.link;
    const isSubLinkActive = pathname.startsWith(l.link);

    return (
      <Link
        data-active={isSubLinkActive || undefined}
        className={classes.subLink}
        href={l.link}
        key={l.label}
      >
        {l.label}
      </Link>
    );
  });

  if (!hasLinks && link) {
    return (
      <Link href={link} className={classes.link} data-active={isActive || undefined}>
        {label}
      </Link>
    );
  }

  return (
    <>
    
      <Box
        onClick={handleClick}
        className={classes.control}
        data-active={isActive || undefined}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: isOpen ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </Box>
      {hasLinks ? <Collapse in={isOpen || nestedActive}>{items}</Collapse> : null}
    </>
  );
}



const menuItems: LinksGroupProps[] = [
  { link: '/dashboard/mytrainings', label: 'My Trainings' },
  { link: '/dashboard/catalog', label: 'Catalog' },
  {
    label: 'Trainings',
    links: [
      { label: 'With CEUs', link: '/dashboard/trainings/ceu' },
      { label: 'Currently Offered', link: '/dashboard/trainings/offered' },

    ],
  },
  {
    label: 'Users',
    links: [
      { label: 'All', link: '/dashboard/users/registered' },
      { label: 'Enrolled in Training', link: '/dashboard/users/enrolled' },
      { label: 'Completion - CEU', link: '/dashboard/users/completedceus' },
      { label: 'Completion - MichiCANS', link: '/dashboard/users/completedmichicans' },
    ],
  },
  { link: '/dashboard/report', label: 'Report' },
];

export function NavDashLeft() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const pathname = usePathname();
  
  const links = menuItems.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      isOpen={openLabel === item.label}
      setOpenLabel={setOpenLabel}
      currentOpenLabel={openLabel}
      // pathname={pathname}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Link className={classes.title} href="/dashboard">Dashboard</Link>
        </Group>
        {links}
      </div>
      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}