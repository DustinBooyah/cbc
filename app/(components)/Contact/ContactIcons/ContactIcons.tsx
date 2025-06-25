import { IconAt, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        {title === 'Email' ? (
          <Text className={classes.description}>
            <a href={`mailto:${description}`} className={classes.link}>
              {description}
            </a>
          </Text>
        ) : (
          <Text className={classes.description}>{description}</Text>
        )}
      </div>
    </div>
  );
}


const contactData = [
  { title: 'Email', description: 'micbc@pcgus.com', icon: IconAt },
  // { title: 'Support Hours', description: 'M-F, 6a - 6p EST, Response Time: 1-2 Business Days', icon: IconSun },
];

export function ContactIconsList() {
  const items = contactData.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}