import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('applies direction correctly', () => {
    const { container } = render(
      <Stack direction="row">
        <div>Item</div>
      </Stack>
    );
    expect(container.firstChild).toHaveStyle({
      'flex-direction': 'row',
    });
  });

  it('applies spacing correctly', () => {
    const { container } = render(
      <Stack spacing="1rem">
        <div>Item</div>
      </Stack>
    );
    expect(container.firstChild).toHaveStyle({
      gap: '1rem',
    });
  });

  it('applies alignment correctly', () => {
    const { container } = render(
      <Stack align="center" justify="space-between">
        <div>Item</div>
      </Stack>
    );
    expect(container.firstChild).toHaveStyle({
      'align-items': 'center',
      'justify-content': 'space-between',
    });
  });
});
