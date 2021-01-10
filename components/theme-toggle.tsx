import React from "react"
import { useTheme } from "next-themes"

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setMounted] = React.useState(false)
  const [s, setSwitch] = React.useState(theme)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    setTheme(s)
  }, [s, setTheme])

  const toggleTheme = (): void => {
    if (isMounted) {
      setSwitch(s === "light" ? "dark" : "light")
    }
  }

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {s === "light" ? (
        <img src="icons/moon.svg" alt="switch to dark mode" />
      ) : (
        <img src="icons/sun.svg" alt="switch to dark mode" />
      )}
    </button>
  )
}
