import { cn } from "../lib/utils"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({ variant = "primary", size = "md", className, ...props }: Props) {
  return (
    <button
      className={cn(
        "rounded-xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-200",
        variant === "ghost" && "bg-transparent hover:bg-slate-100",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    />
  )
}