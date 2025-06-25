import { Group, Text } from '@mantine/core';
import Image from 'next/image';

export function Logo () {
  
    return (
       <Group>
        <Image 
        src="/logo-horizontal-color-svg.svg" 
        alt="Michigan CBC Logo" 
        width="82"
        height="82"
        />
        <Text><strong>Capacity Building Center</strong></Text>
        </Group>

    );
  }