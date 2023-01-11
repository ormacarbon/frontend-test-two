import { useDarkModeContext } from '../contexts/DarkMode';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  console.log(darkMode);
  return (
    <div>
      <h1 onClick={toggleDarkMode}>Hello, World!</h1>
    </div>
  );
}
