export type Theme = 'light' | 'dark';

export const THEME_GRADIENT_CLASSES: Record<Theme, string> = {
  light: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
  dark: 'bg-gradient-to-r from-[#182848] to-[#4b6cb7]',
};

export const THEME_TEXT_COLORS: Record<Theme, string> = {
  light: 'text-blue-900',
  dark: 'text-blue-100',
};

export const THEME_ICON_COLORS: Record<Theme, string> = {
  light: 'text-blue-900',
  dark: 'text-blue-100',
};

export const THEME_SUBTITLE_COLORS: Record<Theme, string> = {
  light: 'text-blue-800',
  dark: 'text-blue-200',
};

export const THEME_FOOTER_COLORS: Record<Theme, { text: string; link: string }> = {
  light: { text: 'text-blue-900/80', link: 'text-blue-900' },
  dark: { text: 'text-blue-200/80', link: 'text-blue-100' },
};
