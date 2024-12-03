import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('displays loading state', () => {
    const { getByText } = render(<Button loading>Click me</Button>);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('disables button when disabled prop is true', () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('applies variant styles correctly', () => {
    const { container } = render(<Button variant="secondary">Click me</Button>);
    const button = container.firstChild as HTMLElement;
    // Test for specific CSS properties instead of comparing to theme values
    expect(button).toHaveStyle({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    });
  });

  it('applies size styles correctly', () => {
    const { container } = render(<Button size="large">Click me</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveStyle({
      padding: '12px 24px',
      fontSize: '18px',
    });
  });

  it('applies full width style when fullWidth prop is true', () => {
    const { container } = render(<Button fullWidth>Click me</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveStyle({
      width: '100%',
    });
  });
});
