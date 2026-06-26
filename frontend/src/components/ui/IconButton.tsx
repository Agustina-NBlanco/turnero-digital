
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function IconButton({ children, className = "", ...props }: IconButtonProps) {
    return (
        <button type="button" className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-slate-100 ${className}`} {...props}>
            {children}
        </button>
    )
}