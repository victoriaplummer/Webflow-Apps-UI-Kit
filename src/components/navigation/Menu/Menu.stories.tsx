import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { action } from '@storybook/addon-actions';
import { ChevronRight, Settings, User, Bell, Lock, ChevronLeft } from 'react-feather'; // Assuming react-feather icons
import { useState } from 'react';
import { Breadcrumb } from '../Breadcrumb';

const meta = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  onItemClick: action('onItemClick'),
  onExpandChange: action('onExpandChange'),
};

export const Default: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: '1',
        label: 'CMS',
        suffix: <ChevronRight size={16} />,
      },
      {
        id: '2',
        label: 'Assets',
        suffix: <ChevronRight size={16} />,
      },
      {
        id: '3',
        label: 'Custom Code',
        suffix: <ChevronRight size={16} />,
      },
    ],
    onItemClick: action('clicked CMS'),
  },
};

export const WithIcons: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: '1',
        label: 'Settings',
        prefixIcon: <Settings size={16} />,
      },
      {
        id: '2',
        label: 'Profile',
        prefixIcon: <User size={16} />,
      },
      {
        id: '3',
        label: 'Notifications',
        prefixIcon: <Bell size={16} />,
      },
    ],
  },
};

export const WithSecondaryLabels: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: '1',
        label: 'Profile Settings',
        labelSecondary: 'Manage your account',
        prefixIcon: <User size={16} />,
      },
      {
        id: '2',
        label: 'Security',
        labelSecondary: 'Password and authentication',
        prefixIcon: <Lock size={16} />,
      },
    ],
  },
};

export const WithOptions: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: '1',
        label: 'Notifications',
        option: 'On',
        prefixIcon: <Bell size={16} />,
      },
      {
        id: '2',
        label: 'Dark Mode',
        option: 'Off',
        prefixIcon: <Settings size={16} />,
      },
    ],
  },
};

export const WithExpandableItems: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: '1',
        label: 'Settings',
        prefixIcon: <Settings size={16} />,
        suffix: <ChevronRight size={16} />,
        isExpanded: false,
      },
      {
        id: '2',
        label: 'Profile',
        prefixIcon: <User size={16} />,
        suffix: <ChevronRight size={16} />,
        isExpanded: true,
      },
    ],
  },
};

export const WithHeadings: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: 'heading1',
        label: 'User Settings',
        variant: 'heading',
      },
      {
        id: '1',
        label: 'Profile',
        prefixIcon: <User size={16} />,
      },
      {
        id: '2',
        label: 'Security',
        prefixIcon: <Lock size={16} />,
      },
      {
        id: 'heading2',
        label: 'System',
        variant: 'heading',
      },
      {
        id: '3',
        label: 'Preferences',
        prefixIcon: <Settings size={16} />,
      },
    ],
  },
};

export const WithSelectedItems: Story = {
  args: {
    ...commonProps,
    items: [
      {
        id: '1',
        label: 'Profile',
        prefixIcon: <User size={16} />,
        isSelected: true,
      },
      {
        id: '2',
        label: 'Settings',
        prefixIcon: <Settings size={16} />,
      },
      {
        id: '3',
        label: 'Security',
        prefixIcon: <Lock size={16} />,
      },
    ],
  },
};

// Define the structure of our nested menus
// Each menu has a title and an array of items
const menuStructure = {
  main: {
    title: 'Main Menu',
    items: [
      {
        id: '1',
        label: 'CMS',
        suffix: <ChevronRight size={16} />,
        nextMenu: 'cms', // Indicates which menu to navigate to when clicked
      },
      {
        id: '2',
        label: 'Assets',
        suffix: <ChevronRight size={16} />,
        nextMenu: 'assets',
      },
    ],
  },
  cms: {
    title: 'CMS',
    items: [
      {
        id: 'back',
        label: 'Back to Main Menu',
        prefixIcon: <ChevronLeft size={16} className="rotate-180" />,
        isBack: true,
      },
      {
        id: 'cms-1',
        label: 'Pages',
        prefixIcon: <Settings size={16} />,
      },
      {
        id: 'cms-2',
        label: 'Collections',
        prefixIcon: <User size={16} />,
      },
    ],
  },
  assets: {
    title: 'Assets',
    items: [
      {
        id: 'back',
        label: 'Back to Main Menu',
        prefixIcon: <ChevronLeft size={16} className="rotate-180" />,
        isBack: true,
      },
      {
        id: 'assets-1',
        label: 'Images',
        prefixIcon: <Bell size={16} />,
      },
      {
        id: 'assets-2',
        label: 'Videos',
        prefixIcon: <Bell size={16} />,
      },
    ],
  },
};

export const NavigableMenu: Story = {
  args: {
    ...commonProps,
    items: [], // Initial items array is empty as we'll manage items through state
  },
  render: () => {
    // Track navigation history as a stack of menu IDs
    // e.g., ['main'] or ['main', 'cms', 'pages']
    const [menuHistory, setMenuHistory] = useState<string[]>(['main']);

    // Get the current menu ID (last item in history array)
    const currentMenu = menuHistory[menuHistory.length - 1];

    // Handle clicks on menu items
    const handleItemClick = (item: any) => {
      if (item.isBack) {
        // Remove the last menu from history (go back one level)
        setMenuHistory((prev) => prev.slice(0, -1));
      } else if (item.nextMenu) {
        // Add the next menu to history (go forward one level)
        setMenuHistory((prev) => [...prev, item.nextMenu]);
      }
      // Log the click action for Storybook
      action('clicked')(item);
    };

    // Convert menu history to breadcrumb items
    const breadcrumbItems = menuHistory.map((menuId, index) => ({
      id: menuId,
      label: menuStructure[menuId as keyof typeof menuStructure].title,
      href: '#',
      onClick: () => {
        // Navigate to this level in the menu
        setMenuHistory(menuHistory.slice(0, index + 1));
      },
    }));

    // Get the menu data for the current level
    const currentMenuData = menuStructure[currentMenu as keyof typeof menuStructure];

    return (
      <div className="flex flex-col gap-4">
        {menuHistory.length > 1 && (
          <Breadcrumb items={breadcrumbItems} separator={<ChevronRight size={16} />} size="small" />
        )}
        <Menu items={currentMenuData.items} onItemClick={handleItemClick} />
      </div>
    );
  },
};
