import Button from "../ui/Button"
import Input from "../ui/Input"

interface PageHeaderProps {
    title: string
    subtitle?: string
    searchPlaceholder?: string
    buttonText?: string
}

export default function PageHeader({ title, subtitle, searchPlaceholder, buttonText }: PageHeaderProps) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                {subtitle && <p className="mt-2 text-lg text-slate-400">{subtitle}</p>}
            </div>

            <div className="flex gap-3">
                {searchPlaceholder && (
                    <Input
                        type="text"
                        placeholder={searchPlaceholder}
                    />
                )}

                {buttonText && (
                    <Button variant="primary" className="px-8">
                        {buttonText}
                    </Button>
                )}
            </div>
        </div>
    )
}