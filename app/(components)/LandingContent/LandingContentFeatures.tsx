import { IconCheck } from '@tabler/icons-react';
import { Container, SimpleGrid, Text } from '@mantine/core';
import classes from './LandingContentFeatures.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  description: string;
}

function Feature({ icon: Icon, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconCheck,
    description: "Strengthen Michigan's children’s behavioral health.",
  },
  {
    icon: IconCheck,
    description: "Directly improve support for children and families.",
  },
  {
    icon: IconCheck,
    description:
      "Stay current with the latest MDHHS policy guidelines. ",
  },
  {
    icon: IconCheck,
    description:
      "Advance professional capabilities.",
  },
];

export function LandingContentFeatures() {
  const items = mockdata.map((item) => <Feature {...item} key={item.description} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 4 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}