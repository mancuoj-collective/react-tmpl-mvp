export default function App() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <h1 className="flex items-center gap-5 font-serif text-4xl">
        React MVP
        <label className="swap swap-flip">
          <input type="checkbox" className="hidden" />
          <div className="swap-on flex items-center justify-center">
            <span className="i-lucide-heart-off"></span>
          </div>
          <div className="swap-off flex items-center justify-center">
            <span className="i-lucide-heart"></span>
          </div>
        </label>
      </h1>
    </div>
  )
}
