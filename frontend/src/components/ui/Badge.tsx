
const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"

const variants = {
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
}

type Variant = keyof typeof variants

interface BadgeProps {
    children: React.ReactNode
    variant: Variant
}

export default function Badge({ children, variant }: BadgeProps) {
    return (
        <span className={`${baseClasses} ${variants[variant]}`}>
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current"></span>
            {children}
        </span>
    )
}