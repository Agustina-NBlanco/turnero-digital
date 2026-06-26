const baseClasses = "inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors cursor-pointer";

const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
    danger: "border border-red-300 bg-white text-red-600 hover:bg-red-50",
    sidebar: "justify-start bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
}

type Variant = keyof typeof variants

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}


export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>{children}</button>
    )
}