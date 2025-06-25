import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Paper, Text } from '@mantine/core';
import classes from './UserInfoWidget.module.css';

export function UserInfoWidget() {
  return (
    <Paper withBorder radius="md" p="md">
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.webp"
          size={94}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Job Title
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Firstname Lastname 
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              email@emailaddress.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              Phone Number
            </Text>
          </Group>
        </div>
      </Group>
    </Paper>
  );
}