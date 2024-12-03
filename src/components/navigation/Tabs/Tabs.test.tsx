import { render, fireEvent, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

const mockTabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: 'Content 1',
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: 'Content 2',
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: 'Content 3',
    disabled: true,
  },
];

describe('Tabs', () => {
  it('renders all tabs', () => {
    render(<Tabs tabs={mockTabs} />);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('shows first tab content by default', () => {
    render(<Tabs tabs={mockTabs} />);
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeVisible();
  });

  it('switches content when clicking tabs', () => {
    render(<Tabs tabs={mockTabs} />);

    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Content 1')).not.toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('calls onChange when switching tabs', () => {
    const handleChange = jest.fn();
    render(<Tabs tabs={mockTabs} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Tab 2'));
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });

  it('respects disabled state', () => {
    render(<Tabs tabs={mockTabs} />);

    const disabledTab = screen.getByText('Tab 3');
    expect(disabledTab).toBeDisabled();

    fireEvent.click(disabledTab);
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('handles controlled active tab', () => {
    const { rerender } = render(<Tabs tabs={mockTabs} activeTab="tab2" />);
    expect(screen.getByText('Content 2')).toBeVisible();

    rerender(<Tabs tabs={mockTabs} activeTab="tab1" />);
    expect(screen.getByText('Content 1')).toBeVisible();
  });
});
