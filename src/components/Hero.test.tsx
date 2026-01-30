import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

const defaultTheme = 'light';

describe('Hero', () => {
  it('renders the main title', () => {
    render(<Hero theme={defaultTheme} />);
    expect(screen.getByText('Simple is better than complex')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Hero theme={defaultTheme} />);
    expect(screen.getByText('Zen of python (PEP)')).toBeInTheDocument();
  });

  it('renders a section with heading', () => {
    render(<Hero theme={defaultTheme} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Simple is better than complex');
  });

  it('renders correctly in dark theme', () => {
    const { container } = render(<Hero theme="dark" />);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Simple is better than complex')).toBeInTheDocument();
  });
});
