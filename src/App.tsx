import { Button } from "./components/Button"

export default function App() {
  return (
    <div className="p-10 space-y-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">DesignSystemX</h1>
      <p>Token-based components. Change one token, update the whole system.</p>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  )
}