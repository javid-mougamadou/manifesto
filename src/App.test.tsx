import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main hero title', () => {
    render(<App />);
    expect(screen.getByText('Simple is better than complex')).toBeInTheDocument();
  });

  it('renders the footer with creator name', () => {
    render(<App />);
    expect(screen.getByText('Javid Mougamadou')).toBeInTheDocument();
  });

  it('renders the Javid Spaces link in footer', () => {
    render(<App />);
    expect(screen.getByText('Javid Spaces')).toBeInTheDocument();
  });
});
