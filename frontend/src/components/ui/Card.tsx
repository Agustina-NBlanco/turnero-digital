
interface CardProps {
    children: React.ReactNode
    className?: string
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`
            rounded-2xl
            bg-white
            p-8
            shadow-lg
            border border-slate-200 ${className}`

        }>
            {children}

        </div>
    )
}