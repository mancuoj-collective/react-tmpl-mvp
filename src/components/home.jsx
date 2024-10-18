export function Home() {
  return (
    <div className="font-sans antialiased">
      <div className="container mx-auto flex min-h-dvh items-center justify-center gap-5">
        <h1 className="font-serif text-3xl font-bold">React MVP</h1>
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="night" />
          <span className="i-lucide-sun swap-on size-6" />
          <span className="i-lucide-moon swap-off size-6" />
        </label>
      </div>
    </div>
  )
}
