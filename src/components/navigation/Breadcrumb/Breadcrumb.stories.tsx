import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { Home, ChevronRight, Settings, Users } from 'react-feather'; // Assuming you use react-feather icons

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A breadcrumb navigation component that helps users understand their current location in a website.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const defaultItems = [
  {
    id: '1',
    label: 'Home',
    href: '/',
  },
  {
    id: '2',
    label: 'Settings',
    href: '/settings',
  },
  {
    id: '3',
    label: 'Profile',
    href: '/settings/profile',
  },
];

const itemsWithIcons = [
  {
    id: '1',
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Home size={16} />
        Home
      </span>
    ),
    href: '/',
  },
  {
    id: '2',
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Settings size={16} />
        Settings
      </span>
    ),
    href: '/settings',
  },
  {
    id: '3',
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Users size={16} />
        Users
      </span>
    ),
    href: '/settings/users',
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: defaultItems,
    separator: <ChevronRight size={16} />,
  },
};

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    separator: <ChevronRight size={16} />,
  },
};

export const Truncated: Story = {
  args: {
    items: [
      ...defaultItems,
      { id: '4', label: 'Security', href: '/settings/profile/security' },
      { id: '5', label: 'Password', href: '/settings/profile/security/password' },
    ],
    maxItems: 3,
  },
};

export const Small: Story = {
  args: {
    items: defaultItems,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    items: defaultItems,
    size: 'large',
  },
};

export const CustomActiveColor: Story = {
  args: {
    items: defaultItems,
    activeItemColor: '#0066FF',
  },
};
