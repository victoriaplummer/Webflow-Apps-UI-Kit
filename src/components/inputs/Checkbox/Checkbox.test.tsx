import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<Checkbox label="Test Checkbox" />);
    expect(getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('handles change events', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox label="Test" onChange={handleChange} />);

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('shows error state correctly', () => {
    const { container } = render(<Checkbox label="Test" error helperText="Error message" />);
    const errorMessage = container.querySelector('.helper-text.error');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Error message');
  });

  it('can be disabled', () => {
    const { getByRole } = render(<Checkbox label="Test" disabled />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('shows checked state correctly', () => {
    const { getByRole } = render(<Checkbox label="Test" checked />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
