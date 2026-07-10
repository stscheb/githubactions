import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Rating } from './Rating';

describe('Rating', () => {
  it('renders the default number of stars', () => {
    render(<Rating value={0} />);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
  });

  it('renders a custom max', () => {
    render(<Rating value={0} max={3} />);
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('marks the current value as checked', () => {
    render(<Rating value={3} />);
    expect(screen.getByLabelText('3 stars')).toBeChecked();
  });

  it('calls onChange with the selected star', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating value={0} onChange={onChange} />);
    await user.click(screen.getByLabelText('4 stars'));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('uses the singular label for the first star', () => {
    render(<Rating value={0} />);
    expect(screen.getByLabelText('1 star')).toBeInTheDocument();
  });

  it('does not call onChange when read-only', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating value={2} onChange={onChange} readOnly />);
    await user.click(screen.getByLabelText('5 stars'));
    expect(onChange).not.toHaveBeenCalled();
  });
});
