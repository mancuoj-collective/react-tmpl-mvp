export default function App() {
  return (
    <h1 className="flex items-center gap-5 font-serif text-4xl">
      React MVP
      <label className="swap swap-flip">
        <input type="checkbox" className="hidden" />
        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
    </h1>
  )
}
