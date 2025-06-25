"use client";

import { Breadcrumbs, Anchor } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LABEL_OVERRIDES: Record<string, string> = {
  michicans: 'MichiCANS',
  iccw: 'ICCW',
  asd: 'ASD',
  sedw: 'SEDW',
  cwp: 'CWP',
};

export function BreadcrumbsNav() {
  const pathname = usePathname(); // e.g. "/dashboard/michicans/detail"
  const segments = pathname.split('/').filter(Boolean);

  const items = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const labelKey = segment.toLowerCase();
    const label = LABEL_OVERRIDES[labelKey] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
      <Anchor component={Link} href={href} key={href}>
        {label}
      </Anchor>
    );
  });

  const breadcrumbs = [
    <Anchor component={Link} href="/" key="home">Home</Anchor>,
    ...items
  ];

  return <Breadcrumbs>{breadcrumbs}</Breadcrumbs>;
}