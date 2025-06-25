import { Group, Text } from '@mantine/core';
import Image from 'next/image';

export function LogoDash () {
  
    return (
       <Group>
        <Image 
        src="/logo-horizontal-color-svg.svg" 
        alt="Michigan CBC Logo" 
        width="56"
        height="56"
        />
        <Text><strong>Capacity Building Center</strong></Text>
        </Group>

    );
  }