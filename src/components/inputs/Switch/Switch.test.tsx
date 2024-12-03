import { render, fireEvent, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch label="Test Switch" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByText('Test Switch')).toBeInTheDocument();
  });

  it('handles toggle correctly', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledWith(true);
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  it('respects disabled state', () => {
    const handleChange = jest.fn();
    render(<Switch disabled onChange={handleChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);

    expect(handleChange).not.toHaveBeenCalled();
    expect(switchElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('shows error state and helper text', () => {
    render(<Switch error={true} helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Switch size="small" />);
    let switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveStyle({ width: '32px' });

    rerender(<Switch size="large" />);
    switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveStyle({ width: '56px' });
  });

  it('shows required indicator when required', () => {
    render(<Switch label="Test Switch" required />);
    expect(screen.getByText('Test Switch *')).toBeInTheDocument();
  });
});
