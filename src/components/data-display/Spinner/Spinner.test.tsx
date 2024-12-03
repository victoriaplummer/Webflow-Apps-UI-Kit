import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders without crashing', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Spinner label="Loading content" />);
    expect(screen.getByText('Loading content')).toBeInTheDocument();
  });

  it('applies size styles correctly', () => {
    const { container } = render(<Spinner size="large" />);
    const spinner = container.querySelector('[role="status"] > div');
    expect(spinner).toHaveStyle({
      width: '32px',
      height: '32px',
    });
  });

  it('applies variant styles correctly', () => {
    const { container } = render(<Spinner variant="light" />);
    const spinner = container.querySelector('[role="status"] > div');
    expect(spinner).toHaveStyle({
      borderTopColor: '#FFFFFF',
    });
  });

  it('includes screen reader text', () => {
    render(<Spinner label="Content" />);
    expect(screen.getByText('Loading: Content')).toHaveClass('sr-only');
  });
});
