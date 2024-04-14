import { useEffect } from 'react'
import { useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <span className="i-lucide-sun swap-on size-6" />
      <span className="i-lucide-moon swap-off size-6" />
    </label>
  )
}
