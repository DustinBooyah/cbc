'use client'
import Image from 'next/image';
import { Text, Container, ActionIcon, Group, Space, GridCol, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandFacebook } from '@tabler/icons-react';
import classes from './FooterLinksOuter.module.css';

const data = [
  // {
  //   title: 'Stay Connected',
  //   links: [
  //     { label: 'Sign Up for MDHHS Newsletter', link: 'https://public.govdelivery.com/accounts/MIDHHS/subscriber/new' },
  //   ],
  // },
  {
    title: 'Links',
    links: [
      { label: 'Contact', link: '/contact' },
      { label: 'FAQ', link: '/faqs' },
      { label: 'Sign Up for MDHHS Newsletter', link: 'https://public.govdelivery.com/accounts/MIDHHS/subscriber/new' },
      // { label: 'Policies', link: '#' },
    ],
  },
];

export function FooterLinksOuter() {
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
      <Container className={classes.inner} size="xl">
        {/* <div className={classes.logo}>
          <Image src="/logo-horizontal-color-svg.svg" alt="Logo - Michigan CBC" width={100} height={100}/>
        </div> */}
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size="xl">
        <Text size="xs">
        © 2025 State Of Michigan
        </Text>

        {/* <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">

          <a title="Facebook" href="" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5}  />
          </ActionIcon>
          </a>

          <a title="Instagram" href="" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </a>

          <a title="LinkedIn" href="" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5}  />
          </ActionIcon>
          </a>

          <a title="X" href="" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5}/>
          </ActionIcon>
          </a>
        </Group> */}
      </Container>
    </footer>
  );
}