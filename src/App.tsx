import { Header, Hero, Footer } from './components';
import { THEME_GRADIENT_CLASSES } from './constants';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const backgroundGradientClass = THEME_GRADIENT_CLASSES[theme];

  return (
    <div className={`flex min-h-screen flex-col ${backgroundGradientClass}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex flex-1 flex-col items-center justify-between px-4 pt-20 pb-12">
        <Hero theme={theme} />
        <Footer theme={theme} />
      </main>
    </div>
  );
};

export default App;
