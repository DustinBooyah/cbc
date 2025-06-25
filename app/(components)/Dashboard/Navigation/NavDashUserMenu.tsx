import { useState } from 'react';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import cx from 'clsx';
import {
  Avatar,
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
  Button
} from '@mantine/core';
import classes from './NavDashUserMenu.module.css';
import { useAuthActions } from '@/app/authActions';

const user = {
  name: 'Firstname Lastname',
  email: 'email@emailaddress.com',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
};

export function NavDashUserMenu() {
  const { signOut } = useAuthActions();

  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
          

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                Account settings
              </Menu.Item>
          <Menu.Divider />

           <Menu.Item onClick={signOut} leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
  );
}