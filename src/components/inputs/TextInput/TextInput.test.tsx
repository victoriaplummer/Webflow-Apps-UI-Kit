import { render, fireEvent, screen } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders correctly', () => {
    render(<TextInput label="Test Input" />);
    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test input' } });

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    expect(input).toHaveValue('test input');
  });

  it('respects maxLength constraint', () => {
    render(<TextInput maxLength={5} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test input' } });
    expect(input).toHaveValue('test ');
  });

  it('shows character count when maxLength is set', () => {
    render(<TextInput maxLength={10} value="test" />);
    expect(screen.getByText('4/10')).toBeInTheDocument();
  });

  it('respects disabled state', () => {
    render(<TextInput disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows error state and helper text', () => {
    render(<TextInput error helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<TextInput label="Test Input" required />);
    expect(screen.getByText('Test Input *')).toBeInTheDocument();
  });

  it('renders with an icon', () => {
    render(<TextInput icon="🔍" label="Search" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('handles different input types correctly', () => {
    const { rerender } = render(<TextInput type="password" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');

    rerender(<TextInput type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('applies full width style when specified', () => {
    const { container } = render(<TextInput fullWidth />);
    expect(container.firstChild).toHaveStyle({ width: '100%' });
  });
});
