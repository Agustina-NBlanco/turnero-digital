export default function AuthContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-100 p-6">
            <div className="w-[440px]">{children}</div>
        </div>
    )
}