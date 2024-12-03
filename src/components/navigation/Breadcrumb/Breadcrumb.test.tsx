import { render, fireEvent, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

const mockItems = [
  {
    id: '1',
    label: 'Home',
    href: '/',
  },
  {
    id: '2',
    label: 'Products',
    href: '/products',
  },
  {
    id: '3',
    label: 'Categories',
    href: '/products/categories',
  },
];

describe('Breadcrumb', () => {
  it('renders all items correctly', () => {
    render(<Breadcrumb items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('renders separators between items', () => {
    const { container } = render(<Breadcrumb items={mockItems} separator="/" />);
    const separators = container.querySelectorAll('span');
    expect(separators).toHaveLength(mockItems.length - 1);
  });

  it('handles custom separator', () => {
    const { container } = render(<Breadcrumb items={mockItems} separator=">" />);
    const separators = container.querySelectorAll('span');
    separators.forEach((separator) => {
      expect(separator).toHaveTextContent('>');
    });
  });

  it('truncates items when maxItems is set', () => {
    render(<Breadcrumb items={mockItems} maxItems={2} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.queryByText('Products')).not.toBeInTheDocument();
  });

  it('calls onClick handler when item is clicked', () => {
    const handleClick = jest.fn();
    const itemsWithClick = mockItems.map((item) => ({
      ...item,
      onClick: handleClick,
    }));

    render(<Breadcrumb items={itemsWithClick} />);

    fireEvent.click(screen.getByText('Products'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Breadcrumb items={mockItems} size="small" />);
    expect(screen.getByText('Home').parentElement).toHaveStyle({ fontSize: '0.875rem' });

    rerender(<Breadcrumb items={mockItems} size="large" />);
    expect(screen.getByText('Home').parentElement).toHaveStyle({ fontSize: '1.125rem' });
  });

  it('applies active item color to last item', () => {
    render(<Breadcrumb items={mockItems} activeItemColor="#ff0000" />);
    const lastItem = screen.getByText('Categories');
    expect(lastItem).toHaveStyle({ color: '#ff0000' });
  });
});
