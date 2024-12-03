import { render, fireEvent, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true },
];

describe('Dropdown', () => {
  it('renders with placeholder', () => {
    render(<Dropdown options={mockOptions} placeholder="Select option" />);
    expect(screen.getByText('Select option')).toBeInTheDocument();
  });

  it('opens menu on click', () => {
    render(<Dropdown options={mockOptions} />);
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects an option when clicked', () => {
    const handleSelect = jest.fn();
    render(<Dropdown options={mockOptions} onSelect={handleSelect} />);

    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Option 1'));

    expect(handleSelect).toHaveBeenCalledWith('1');
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('shows helper text and error state', () => {
    render(<Dropdown options={mockOptions} error={true} helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('disables interaction when disabled', () => {
    const handleSelect = jest.fn();
    render(<Dropdown options={mockOptions} disabled={true} onSelect={handleSelect} />);

    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('respects disabled options', () => {
    const handleSelect = jest.fn();
    render(<Dropdown options={mockOptions} onSelect={handleSelect} />);

    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Option 3'));

    expect(handleSelect).not.toHaveBeenCalled();
  });
});
