import { useTheme } from "../context/Theme";

export function Button() {

  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  )
}