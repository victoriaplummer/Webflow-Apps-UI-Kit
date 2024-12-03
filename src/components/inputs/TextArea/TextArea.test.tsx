import { render, fireEvent, screen } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<TextArea label="Test TextArea" />);
    expect(screen.getByLabelText('Test TextArea')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<TextArea onChange={handleChange} />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'test input' } });

    expect(handleChange).toHaveBeenCalledWith('test input');
    expect(textarea).toHaveValue('test input');
  });

  it('respects maxLength constraint', () => {
    const handleChange = jest.fn();
    render(<TextArea maxLength={5} onChange={handleChange} />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'test input' } });

    expect(textarea).toHaveValue('test ');
  });

  it('shows character count when maxLength is set', () => {
    render(<TextArea maxLength={10} value="test" />);
    expect(screen.getByText('4/10')).toBeInTheDocument();
  });

  it('respects disabled state', () => {
    render(<TextArea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows error state and helper text', () => {
    render(<TextArea error={true} helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<TextArea label="Test TextArea" required />);
    expect(screen.getByText('Test TextArea *')).toBeInTheDocument();
  });
});
