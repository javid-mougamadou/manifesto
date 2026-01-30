type SunIconProps = {
  className?: string;
  size?: 'sm' | 'md';
};

const sizeClasses = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
};

const SunIcon = ({ className = '', size = 'md' }: SunIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${sizeClasses[size]} ${className}`}
  >
    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
    />
  </svg>
);

export default SunIcon;
