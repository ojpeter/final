import React from 'react'

export const ThemeContext = React.createContext()

export const CustomThemeProvider = ({ children }) => {
  // theme = light, dark
  const [theme, setTheme] = React.useState('customLight')

  const toggleTheme = () => {
    if (theme === 'customLight') {
      setTheme('customDark')
    } else {
      setTheme('customLight')
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
