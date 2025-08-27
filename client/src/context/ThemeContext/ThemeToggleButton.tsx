// ThemeToggleButton.tsx
import { useTheme } from "./ThemeContext";

const SunIcon = () => <span style={{ marginRight: 8 }}>☀️</span>;
const MoonIcon = () => <span style={{ marginRight: 8 }}>🌙</span>;

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="cursor-pointer outline-0">
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
