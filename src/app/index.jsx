import { TwScreenIndicator } from '../components/tw-screen-indicator'
import { DarkModeToggle } from '../components/dark-mode-toggle'

export function App() {
  return (
    <div className="font-sans antialiased">
      <div className="flex min-h-svh flex-col items-center justify-center gap-5">
        <button className="btn font-semibold">React - Tmpl - MVP</button>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <a
            href="https://github.com/mancuoj-collective/react-tmpl-mvp"
            className="i-lucide-github"
          />
        </div>
      </div>
      <TwScreenIndicator />
    </div>
  )
}
