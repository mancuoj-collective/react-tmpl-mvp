import { useDark } from '../hooks/use-dark'

export function DarkModeToggle(className = '') {
  const { toggleDark } = useDark()

  return (
    <button
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      type="button"
      onClick={toggleDark}
      className={`flex ${className}`}
    >
      <div
        role="img"
        aria-hidden="true"
        className="i-lucide-sun rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0"
      />
      <div
        role="img"
        aria-hidden="true"
        className="i-lucide-moon absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100"
      />
    </button>
  )
}
