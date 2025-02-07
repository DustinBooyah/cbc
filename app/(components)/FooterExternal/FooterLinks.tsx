'use client'
import Image from 'next/image';
import { Text, Container, ActionIcon, Group, Grid, GridCol, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandFacebook } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'Project',
    links: [
      { label: 'Sign Up for Newsletter', link: 'http://eepurl.com/i1CVW-/' },
    ],
  },
  {
    title: 'Links',
    links: [
      { label: 'Contact', link: '/contact' },
      { label: 'FAQ', link: '/faq' },
      { label: 'Email', link: 'mailto:mainecoe@pcgus.com' },
    ],
  },
  
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="lg">
        <div className={classes.logo}>
        <Group>
          <Image src="/logo-coe.gif" alt="Logo - Maine COE" width={120} height={60} />
         Maine Center of Excellence for<br></br>Behavioral Health and Well-being
        </Group>
        </div>



        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="xs">
        © 2024 Public Consulting Group
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">

          <a title="Facebook" href="https://www.facebook.com/p/maine-center-of-excellence-for-behavioral-health-61566641053615/" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5}  />
          </ActionIcon>
          </a>

          <a title="Instagram" href="https://www.instagram.com/coemaine/" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </a>

          <a title="LinkedIn" href="https://www.linkedin.com/company/coemaine/" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5}  />
          </ActionIcon>
          </a>

          <a title="X" href="https://x.com/coemaine" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5}/>
          </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}