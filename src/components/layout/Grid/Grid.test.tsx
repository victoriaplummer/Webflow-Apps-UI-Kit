import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from './Grid';
import { Box } from '../../primitives/Box';

describe('Grid', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Grid>
        <div>Grid Item</div>
      </Grid>
    );
    expect(getByText('Grid Item')).toBeInTheDocument();
  });

  it('applies custom columns', () => {
    const { container } = render(
      <Grid columns={3}>
        <div>Item</div>
      </Grid>
    );
    expect(container.firstChild).toHaveStyle({
      'grid-template-columns': 'repeat(3, 1fr)',
    });
  });

  it('applies gap correctly', () => {
    const { container } = render(
      <Grid gap={16}>
        <div>Item</div>
      </Grid>
    );
    expect(container.firstChild).toHaveStyle({
      gap: '16px',
    });
  });

  it('applies gridArea and gridColumn correctly', () => {
    const { container } = render(
      <Grid>
        <Box gridArea="header" gridColumn="1 / 3">
          Item
        </Box>
      </Grid>
    );
    expect(container.firstChild?.firstChild).toHaveStyle({
      'grid-area': 'header',
      'grid-column': '1 / 3',
    });
  });
});
