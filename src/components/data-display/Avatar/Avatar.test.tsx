import { render, fireEvent, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar src="test.jpg" alt="Test User" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'Test User');
  });

  it('renders fallback when src is not provided', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders custom fallback when provided', () => {
    render(<Avatar />);
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  it('handles image load error', () => {
    render(<Avatar src="invalid.jpg" alt="Test User" />);
    const img = screen.getByRole('img');
    fireEvent.error(img);
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('applies size styles correctly', () => {
    const { container } = render(<Avatar size="large" />);
    expect(container.firstChild).toHaveStyle({
      width: '48px',
      height: '48px',
    });
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Avatar onClick={handleClick} />);
    fireEvent.click(screen.getByRole('img'));
    expect(handleClick).toHaveBeenCalled();
  });
});
