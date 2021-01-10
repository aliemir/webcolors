import React from "react"
import { useTheme } from "next-themes"

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = (): void => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      Toggle theme
    </button>
  )
}
