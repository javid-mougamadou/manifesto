import { THEME_SUBTITLE_COLORS, THEME_TEXT_COLORS } from '../constants';
import type { Theme } from '../constants';

type HeroProps = {
  theme: Theme;
};

const HERO_TITLE = 'Simple is better than complex';
const HERO_SUBTITLE = 'Zen of python (PEP)';

const Hero = ({ theme }: HeroProps) => {
  const titleColor = THEME_TEXT_COLORS[theme];
  const subtitleColor = THEME_SUBTITLE_COLORS[theme];

  return (
    <section className="flex w-full flex-1 items-center justify-center">
      <div className="w-full px-4 text-center">
        <div className="w-full max-w-full font-sans">
          <h1
            className={`mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl ${titleColor}`}
          >
            {HERO_TITLE}
          </h1>
          <p
            className={`mt-4 text-base opacity-80 sm:text-lg md:text-xl lg:text-2xl ${subtitleColor}`}
          >
            {HERO_SUBTITLE}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
