



interface TableProps {
    headers: string[]
    children: React.ReactNode
}

export default function Table({ headers, children }: TableProps) {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-900 bg-white shadow-sm">
            <table className="w-full border-collapse">
                <thead className="bg-slate-100">
                    <tr>
                        {headers.map(header => (
                            <th key={header} className="px-6 py-3 text-left text-sm font-semibold text-slate-700">{header}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="">
                    {children}
                </tbody>
            </table>
        </div>
    )
}