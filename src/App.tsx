import { useState } from "react"

function Button({ children, variant = "primary", disabled = false }: { children: React.ReactNode, variant?: "primary" | "secondary" | "ghost", disabled?: boolean }) {
  const styles = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-900",
    ghost: "bg-transparent text-gray-900 underline",
  }
  return <button disabled={disabled} className={`px-5 py-2 rounded-lg font-medium ${styles[variant]} ${disabled ? "opacity-40" : ""}`}>{children}</button>
}

export default function App() {
  const [name, setName] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [primaryColor, setPrimaryColor] = useState("#2563eb")

  return (
    <main className="max-w-4xl mx-auto px-6 py-12" style={{ ["--brand" as string]: primaryColor }}>
      <h1 className="text-5xl font-bold">DesignSystemX</h1>
      <p className="text-gray-600 mt-2 text-lg">Token-based components. Change one token, update the whole system.</p>

      <div className="border rounded-xl p-6 mt-8">
        <h2 className="font-bold text-xl">1. Tokens — Try it live</h2>
        <p className="text-sm text-gray-600 mt-1">Pick a brand color. Buttons below use that token.</p>
        <div className="flex gap-3 mt-4">
          {["#2563eb", "#dc2626", "#059669", "#7c3aed", "#ea580c"].map((c) => (
            <button key={c} onClick={() => setPrimaryColor(c)} className="w-10 h-10 rounded-full border-2" style={{ backgroundColor: c }} />
          ))}
        </div>
        <p className="text-sm mt-3">Current token: <span className="font-mono font-bold">{primaryColor}</span></p>
      </div>

      <div className="border rounded-xl p-6 mt-6">
        <h2 className="font-bold text-xl">2. Buttons</h2>
        <div className="flex gap-3 mt-4 flex-wrap">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div className="border rounded-xl p-6 mt-6">
        <h2 className="font-bold text-xl">3. Input + Card + Badge</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Type your name..." className="border rounded-lg px-4 py-2 w-full mt-4" />
        <p className="text-sm mt-2">Hello, {name || "—"}</p>
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">New</span>
          <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">Stable</span>
          <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">Beta</span>
        </div>
        <div className="border rounded-lg p-4 mt-4">
          <p className="font-bold">Card Component</p>
          <p className="text-sm text-gray-600">Reusable card with consistent padding, radius, and shadow.</p>
        </div>
      </div>

      <div className="border rounded-xl p-6 mt-6">
        <h2 className="font-bold text-xl">4. Modal</h2>
        <button onClick={() => setShowModal(true)} className="bg-black text-white px-5 py-2 rounded-lg mt-4">Open Modal</button>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full">
              <h3 className="font-bold text-lg">Modal Component</h3>
              <p className="text-sm text-gray-600 mt-2">This is a reusable modal. Click close to dismiss.</p>
              <button onClick={() => setShowModal(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">Close</button>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-8">Built by Alex Muthiana — React • TypeScript • Tailwind • Design Tokens • Storybook</p>
    </main>
  )
}