import { render, fireEvent, screen } from '@testing-library/react';
import { Menu } from './Menu';
import { Home, Settings, Users } from 'react-feather';

const mockItems = [
  {
    id: '1',
    label: 'Home',
    icon: <Home size={16} />,
    href: '/',
  },
  {
    id: '2',
    label: 'Settings',
    icon: <Settings size={16} />,
    items: [
      {
        id: '2-1',
        label: 'Profile',
        href: '/settings/profile',
      },
      {
        id: '2-2',
        label: 'Security',
        href: '/settings/security',
      },
    ],
  },
  {
    id: '3',
    label: 'Users',
    icon: <Users size={16} />,
    disabled: true,
  },
];

describe('Menu', () => {
  it('renders all menu items', () => {
    render(<Menu items={mockItems} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('handles item click', () => {
    const handleClick = jest.fn();
    render(<Menu items={mockItems} onItemClick={handleClick} />);

    fireEvent.click(screen.getByText('Home'));
    expect(handleClick).toHaveBeenCalledWith(mockItems[0]);
  });

  it('expands/collapses submenu', () => {
    const handleExpandChange = jest.fn();
    render(<Menu items={mockItems} onExpandChange={handleExpandChange} />);

    fireEvent.click(screen.getByText('Settings'));
    expect(handleExpandChange).toHaveBeenCalledWith('2', true);
  });

  it('respects disabled state', () => {
    const handleClick = jest.fn();
    render(<Menu items={mockItems} onItemClick={handleClick} />);

    const disabledItem = screen.getByText('Users');
    expect(disabledItem.closest('button')).toBeDisabled();

    fireEvent.click(disabledItem);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders icons when showIcons is true', () => {
    const { container } = render(<Menu items={mockItems} showIcons />);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('hides icons when showIcons is false', () => {
    const { container } = render(<Menu items={mockItems} showIcons={false} />);
    const icons = container.querySelectorAll('svg');
    // Only expand icons should be visible
    expect(icons.length).toBe(1);
  });

  it('applies active state correctly', () => {
    render(<Menu items={mockItems} activeId="1" />);
    const activeItem = screen.getByText('Home');
    expect(activeItem.closest('button')).toHaveStyle({
      color: expect.any(String),
      background: expect.any(String),
    });
  });

  it('renders in horizontal variant', () => {
    const { container } = render(<Menu items={mockItems} variant="horizontal" />);
    const menuList = container.querySelector('ul');
    expect(menuList).toHaveStyle({ flexDirection: 'row' });
  });
});
