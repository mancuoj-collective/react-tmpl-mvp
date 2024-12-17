import { TwScreenIndicator } from '../components/tw-screen-indicator'

export function App() {
  return (
    <div className="font-sans antialiased">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <button className="btn">
          React MVP
          <span className="i-lucide-heart" />
        </button>
      </div>
      <TwScreenIndicator />
    </div>
  )
}
