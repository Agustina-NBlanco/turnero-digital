
type InputProps = React.InputHTMLAttributes<HTMLInputElement>


export default function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            {...props}
            className={`w-full
                rounded-lg
                border border-slate-300
                px-3 py-2.5
                text-sm
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                ${className}`}
        />
    )
}