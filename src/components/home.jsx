export function Home() {
  return (
    <div className="font-sans antialiased">
      <div className="container mx-auto flex min-h-svh items-center justify-center gap-3">
        <h1 className="font-serif text-xl font-bold">React MVP</h1>
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="black" />
          <span className="i-lucide-sun swap-on size-4" />
          <span className="i-lucide-moon swap-off size-4" />
        </label>
      </div>
    </div>
  )
}
