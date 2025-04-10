import { createContext, useContext, useState } from "react";

// Creating the Theme Context
const ThemeContext = createContext();

// Create the provider
export function ThemeProvider({ children }) {
  
  // The logic
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // Return the component
  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Create the custom hook
export const useTheme = () => useContext(ThemeContext);