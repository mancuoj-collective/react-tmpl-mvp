import { ThemeToggle } from './components/theme-toggle'

export default function App() {
  return (
    <div className="flex h-dvh items-center justify-center gap-5 font-serif">
      <h1 className="text-3xl font-bold">React MVP</h1>
      <ThemeToggle />
    </div>
  )
}
