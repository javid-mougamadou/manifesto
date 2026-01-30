import { THEME_FOOTER_COLORS } from '../constants';
import type { Theme } from '../constants';

type FooterProps = {
  theme: Theme;
};

const CREATOR_NAME = 'Javid Mougamadou';
const CREATOR_URL = 'https://javid-mougamadou.pro/';
const SPACES_NAME = 'Javid Spaces';
const SPACES_URL = 'https://javid-space.cloud/';

const Footer = ({ theme }: FooterProps) => {
  const { text: textColor, link: linkColor } = THEME_FOOTER_COLORS[theme];

  return (
    <footer className={`w-full max-w-5xl py-8 text-center text-sm ${textColor}`}>
      <p>
        Created by{' '}
        <a
          href={CREATOR_URL}
          className={`font-semibold ${linkColor} underline-offset-2 hover:underline`}
          target="_blank"
          rel="author noreferrer"
          aria-label={`${CREATOR_NAME} - Creator`}
        >
          {CREATOR_NAME}
        </a>{' '}
        on{' '}
        <a
          href={SPACES_URL}
          className={`font-semibold ${linkColor} underline-offset-2 hover:underline`}
          target="_blank"
          rel="noreferrer"
        >
          {SPACES_NAME}
        </a>
      </p>
      {/* <p className="mt-2">
        UI components by{' '}
        <a
          href="https://daisyui.com/"
          className="text-blue-900 underline-offset-2 hover:underline font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          DaisyUI
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
