import { render } from '@testing-library/react';
import { Container } from './Container';
import '@testing-library/jest-dom';

describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Test Content</div>
      </Container>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom styles correctly', () => {
    const { container } = render(
      <Container width="200px" height="100px" background="red" padding="20px">
        <div>Test Content</div>
      </Container>
    );

    const containerElement = container.firstChild as HTMLElement;
    expect(containerElement).toHaveStyle({
      width: '200px',
      height: '100px',
      background: 'red',
      padding: '20px',
    });
  });
});
