
"use client"

import { useState } from "react"
import Button from "@/components/ui/buttons/Button"
import { Eye, EyeOff } from "lucide-react"
import Modal from "@/components/ui/overlay/Modal"
import Input from "@/components/ui/forms/Input"
import { toast } from "sonner"

interface Props {
    open: boolean
    onClose: () => void
}

export default function ChangePasswordModal({ open, onClose }: Props) {

    const [showCurrent, setShowCurrent] = useState(false)
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }))
    }

    const isValid =
        form.currentPassword &&
        form.newPassword &&
        form.confirmPassword &&
        form.newPassword === form.confirmPassword

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!isValid) return

        console.log("Cambio de contraseña:", form)

        setForm({
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        })

        onClose()
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Cambiar contraseña"
            subtitle="Ingresá tu contraseña actual y la nueva"
            size="sm"
        >
            <form onSubmit={handleSubmit} className="space-y-5">

                {/* ACTUAL */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-slate-600">Contraseña actual</label>

                    <div className="relative">
                        <Input
                            type={showCurrent ? "text" : "password"}
                            value={form.currentPassword}
                            onChange={(e) => handleChange("currentPassword", e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={() => setShowCurrent(!showCurrent)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                        >
                            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* NUEVA */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-slate-600">Nueva contraseña</label>

                    <div className="relative">
                        <Input
                            type={showNew ? "text" : "password"}
                            value={form.newPassword}
                            onChange={(e) => handleChange("newPassword", e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={() => setShowNew(!showNew)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                        >
                            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* CONFIRMAR */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-slate-600">Confirmar contraseña</label>

                    <div className="relative">
                        <Input
                            type={showConfirm ? "text" : "password"}
                            value={form.confirmPassword}
                            onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                        >
                            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* ERROR SIMPLE */}
                {form.newPassword !== form.confirmPassword && form.confirmPassword && (
                    <p className="text-sm text-red-500">
                        Las contraseñas no coinciden
                    </p>
                )}

                {/* ACTIONS */}
                <div className="flex justify-end gap-3 pt-2">
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>

                    <Button
                        type="submit"
                        disabled={!isValid}
                        className="bg-linear-to-r from-indigo-500 to-violet-500 text-white"
                        onClick={() => {
                            toast.success("Contraseña actualizada correctamente")
                        }}
                    >
                        Guardar cambios
                    </Button>
                </div>

            </form>
        </Modal>
    )
}