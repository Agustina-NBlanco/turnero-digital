"use client"

import { HeartPulse, LogOut } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { menuItems } from "@/constants/sidebar";
import { usePathname } from "next/navigation";


export default function Sidebar() {

    const pathName = usePathname()

    return (
        <aside className="flex h-screen flex-col w-64 bg-slate-900 text-white shadow-xl">
            <div className="border-b border-slate-800 p-6">
                <div className="flex items-center gap-3">
                    <HeartPulse className="h-8 w-8" />

                    <div>
                        <h1 className="text-xl font-bold">Turnero Digital</h1>
                        <p className="text-sm text-slate-400">Panel Administrativo</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 space-y-3 p-4">
                {menuItems.map(item => {
                    const { icon: Icon } = item
                    const isActive = pathName === item.href
                    return (
                        <Link key={item.href} href={item.href} className={`
                            flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-100
                            ${isActive
                                ? "bg-slate-800 text-white border-l-4 border-blue-500"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"}
                            `}>
                            <Icon className="h-5 w-5 shrink-0" />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            <footer className="border-t border-slate-800 p-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-700">
                        A
                    </div>

                    <div>
                        <p className="font-medium">Alejandro</p>
                        <p className="text-sm text-slate-400">Administrador</p>
                    </div>
                </div>

                <Button variant="secondary" className="mt-4 w-full">
                    <LogOut className="h-5 w-5" />
                    Cerrar sesión
                </Button>

            </footer>
        </aside>

    )
}