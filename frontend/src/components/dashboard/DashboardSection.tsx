import Card from "../ui/Card"

interface DashboardSectionProps {
    title: string
    children: React.ReactNode
}


export default function DashboardSection({ title, children }: DashboardSectionProps) {
    return (
        <Card>
            <h2 className="mb-6 text-xl font-semibold">{title}</h2>
            {children}
        </Card>
    )
}