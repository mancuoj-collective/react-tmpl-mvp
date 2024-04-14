import { ThemeToggle } from './components/theme-toggle'

export default function App() {
  return (
    <div className="flex min-h-dvh font-sans antialiased">
      <div className="container mx-auto flex items-center justify-center gap-5">
        <h1 className="font-serif text-3xl font-bold">React MVP</h1>
        <ThemeToggle />
      </div>
    </div>
  )
}
