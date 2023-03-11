import { useState, createContext, useContext } from 'react'

const BASE_URL =' http://localhost:3002/posts'

const ThemeMode = createContext()
const ThemeToggle = createContext()

export const useToggle = () => {
  return useContext(ThemeToggle)
}

export const useDarkTheme = () => {
  return useContext(ThemeMode)
}

export const ToggleThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const toggleThemeMode = () => {
    theme === 'dark' ? setTheme('light'): setTheme('dark')
  }

  return (
    <ThemeMode.Provider value={theme}>
      <ThemeToggle.Provider value={toggleThemeMode}>
        {children}
      </ThemeToggle.Provider>
    </ThemeMode.Provider>
  )
}


export const fetchPost = async(id) => {
  const response = await fetch(`${BASE_URL}/${id}`)
  const data = await response.json();
  return data
}


export const fetchUserPosts = async(userId) =>{
  const response = await fetch(`${BASE_URL}/user/${userId}`)
  const data = await response.json()
  return formateDateToDescendingOrder(data)
}

export const formateDateToDescendingOrder = (data) => {
  if (data) {
    data = data.slice()
      .sort()
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  }
  return data
}