import React from 'react';
import light from '/light-mode-button.png';
import dark from '/dark-mode-button.png';

function DarkMode() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  const element = document.documentElement;
  React.useState(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        src={light}
        alt=""
      />
      <img
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        src={dark}
        alt=""
      />
    </div>
  );
}

export default DarkMode;
