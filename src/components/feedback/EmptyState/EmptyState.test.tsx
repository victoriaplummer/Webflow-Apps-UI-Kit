import { render, fireEvent, screen } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders title correctly', () => {
    render(<EmptyState title="No items found" />);
    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<EmptyState title="No items" description="Try adding some items" />);
    expect(screen.getByText('Try adding some items')).toBeInTheDocument();
  });

  it('renders action button and handles click', () => {
    const handleClick = jest.fn();
    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Add Item',
          onClick: handleClick,
        }}
      />
    );

    const button = screen.getByText('Add Item');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders icon when provided', () => {
    render(<EmptyState title="No items" icon={<span data-testid="test-icon">🔍</span>} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(<EmptyState title="No items" image="test-image.jpg" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<EmptyState title="No items" size="small" />);
    expect(screen.getByText('No items')).toHaveStyle({ fontSize: '16px' });

    rerender(<EmptyState title="No items" size="large" />);
    expect(screen.getByText('No items')).toHaveStyle({ fontSize: '24px' });
  });

  it('respects alignment prop', () => {
    render(<EmptyState title="No items" align="left" />);
    expect(screen.getByText('No items').parentElement?.parentElement).toHaveStyle({
      alignItems: 'left',
      textAlign: 'left',
    });
  });

  it('handles disabled action button', () => {
    const handleClick = jest.fn();
    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Add Item',
          onClick: handleClick,
          disabled: true,
        }}
      />
    );

    const button = screen.getByText('Add Item');
    expect(button).toBeDisabled();
  });
});
