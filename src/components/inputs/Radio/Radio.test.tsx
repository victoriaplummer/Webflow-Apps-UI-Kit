import { render, fireEvent, screen } from '@testing-library/react';
import { Radio } from './Radio';

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true },
];

describe('Radio', () => {
  it('renders all options', () => {
    render(<Radio options={mockOptions} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('handles option selection', () => {
    const handleChange = jest.fn();
    render(<Radio options={mockOptions} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('respects disabled state', () => {
    const handleChange = jest.fn();
    render(<Radio options={mockOptions} onChange={handleChange} disabled />);

    fireEvent.click(screen.getByText('Option 1'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('respects disabled options', () => {
    const handleChange = jest.fn();
    render(<Radio options={mockOptions} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Option 3'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows error state and helper text', () => {
    render(<Radio options={mockOptions} error={true} helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('renders in horizontal direction', () => {
    const { container } = render(<Radio options={mockOptions} direction="horizontal" />);
    const group = container.querySelector('div[style*="flex-direction: row"]');
    expect(group).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<Radio options={mockOptions} label="Select an option" required={true} />);
    expect(screen.getByText('Select an option *')).toBeInTheDocument();
  });
});
