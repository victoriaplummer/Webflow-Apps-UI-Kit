import { render } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Box>
        <div>Test Content</div>
      </Box>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom styles correctly', () => {
    const { container } = render(
      <Box backgroundColor="#000" padding={20} margin={10} borderRadius="8px">
        <div>Test Content</div>
      </Box>
    );
    const boxElement = container.firstChild as HTMLElement;
    expect(boxElement).toHaveStyle({
      backgroundColor: '#000',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
    });
  });
});
