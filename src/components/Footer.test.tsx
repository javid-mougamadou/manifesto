import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const defaultTheme = 'light';

describe('Footer', () => {
  it('renders the creator link', () => {
    render(<Footer theme={defaultTheme} />);
    const creatorLink = screen.getByText('Javid Mougamadou');
    expect(creatorLink).toBeInTheDocument();
    expect(creatorLink).toHaveAttribute('href', 'https://javid-mougamadou.pro/');
    expect(creatorLink).toHaveAttribute('target', '_blank');
    expect(creatorLink).toHaveAttribute('rel', 'author noreferrer');
  });

  it('renders the Javid Spaces link', () => {
    render(<Footer theme={defaultTheme} />);
    const spacesLink = screen.getByText('Javid Spaces');
    expect(spacesLink).toBeInTheDocument();
    expect(spacesLink).toHaveAttribute('href', 'https://javid-space.cloud/');
    expect(spacesLink).toHaveAttribute('target', '_blank');
  });

  it('renders the "Created by" text', () => {
    render(<Footer theme={defaultTheme} />);
    expect(screen.getByText(/Created by/)).toBeInTheDocument();
  });

  it('renders the "on" connector text', () => {
    render(<Footer theme={defaultTheme} />);
    expect(screen.getByText(/on/)).toBeInTheDocument();
  });

  it('renders correctly in dark theme', () => {
    render(<Footer theme="dark" />);
    expect(screen.getByText('Javid Mougamadou')).toBeInTheDocument();
    expect(screen.getByText('Javid Spaces')).toBeInTheDocument();
  });
});
