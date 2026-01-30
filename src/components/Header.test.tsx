import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    const toggleTheme = vi.fn();
    render(<Header theme="dark" onToggleTheme={toggleTheme} />);
    expect(screen.getByText('Manifesto')).toBeInTheDocument();
  });

  it('renders theme button in desktop mode', () => {
    const toggleTheme = vi.fn();
    render(<Header theme="dark" onToggleTheme={toggleTheme} />);
    const themeButton = screen.getByLabelText('Activer le mode clair');
    expect(themeButton).toBeInTheDocument();
  });

  it('shows sun icon in dark mode', () => {
    const toggleTheme = vi.fn();
    render(<Header theme="dark" onToggleTheme={toggleTheme} />);
    const themeButton = screen.getByLabelText('Activer le mode clair');
    expect(themeButton).toBeInTheDocument();
  });

  it('shows moon icon in light mode', () => {
    const toggleTheme = vi.fn();
    render(<Header theme="light" onToggleTheme={toggleTheme} />);
    const themeButton = screen.getByLabelText('Activer le mode sombre');
    expect(themeButton).toBeInTheDocument();
  });

  it('calls onToggleTheme when theme button is clicked', async () => {
    const user = userEvent.setup();
    const toggleTheme = vi.fn();
    render(<Header theme="dark" onToggleTheme={toggleTheme} />);
    const themeButton = screen.getByLabelText('Activer le mode clair');
    await user.click(themeButton);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
