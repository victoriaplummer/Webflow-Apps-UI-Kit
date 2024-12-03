import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renders children correctly', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders different variants with correct tag', () => {
    const { container, rerender } = render(<Text variant="h1">Heading</Text>);
    expect(container.querySelector('h1')).toBeInTheDocument();

    rerender(<Text variant="body1">Body</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('applies custom styles correctly', () => {
    const { container } = render(
      <Text color="red" align="center" weight={700}>
        Styled Text
      </Text>
    );
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      color: 'red',
      textAlign: 'center',
      fontWeight: 700,
    });
  });

  it('respects custom as prop', () => {
    const { container } = render(<Text as="span">Span Text</Text>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    const { container } = render(<Text variant="h2">Heading 2</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      fontSize: '28px',
      fontWeight: 700,
    });
  });
});
