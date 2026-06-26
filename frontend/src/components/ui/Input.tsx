
type InputProps = React.InputHTMLAttributes<HTMLInputElement>


export default function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="max-w-xs rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
        />
    )
}