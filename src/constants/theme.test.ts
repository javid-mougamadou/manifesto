import { describe, it, expect } from 'vitest';
import {
  THEME_GRADIENT_CLASSES,
  THEME_TEXT_COLORS,
  THEME_ICON_COLORS,
  THEME_SUBTITLE_COLORS,
  THEME_FOOTER_COLORS,
} from './theme';

describe('theme constants', () => {
  it('defines gradient classes for light and dark themes', () => {
    expect(THEME_GRADIENT_CLASSES.light).toContain('blue-100');
    expect(THEME_GRADIENT_CLASSES.dark).toContain('#182848');
  });

  it('defines text colors for both themes', () => {
    expect(THEME_TEXT_COLORS.light).toBe('text-blue-900');
    expect(THEME_TEXT_COLORS.dark).toBe('text-blue-100');
  });

  it('defines icon colors for both themes', () => {
    expect(THEME_ICON_COLORS.light).toBe('text-blue-900');
    expect(THEME_ICON_COLORS.dark).toBe('text-blue-100');
  });

  it('defines subtitle colors for both themes', () => {
    expect(THEME_SUBTITLE_COLORS.light).toBe('text-blue-800');
    expect(THEME_SUBTITLE_COLORS.dark).toBe('text-blue-200');
  });

  it('defines footer colors with text and link for both themes', () => {
    expect(THEME_FOOTER_COLORS.light).toHaveProperty('text');
    expect(THEME_FOOTER_COLORS.light).toHaveProperty('link');
    expect(THEME_FOOTER_COLORS.dark).toHaveProperty('text');
    expect(THEME_FOOTER_COLORS.dark).toHaveProperty('link');
  });
});
