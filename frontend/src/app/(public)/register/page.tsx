"use client"

import AuthContainer from "@/components/auth/AuthContainer"
import AuthLeftSide from "@/components/auth/AuthLeftSide"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import { RegisterSchema } from "@/lib/validations/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"

type RegisterFormData = z.infer<typeof RegisterSchema>

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { register, handleSubmit, formState: { errors, isValid }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
        mode: "onChange"
    })

    const onSubmit = (data: RegisterFormData) => console.log(data)

    return (
        <div className="min-h-screen flex">
            <AuthLeftSide />

            <AuthContainer>
                <Card className="w-full shadow-xl rounded-2xl">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semi-bold text-slate-800">Crear cuenta</h1>
                        <p className="text-sm text-slate-500">Completá tus datos para registrarte</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">Nombre Completo</label>
                            <Input type="text" {...register("name")} className="placeholder:text-slate-500 text-slate-800" placeholder="Ej: María Gonzáles" onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "")
                            }} />

                            {errors.name && (
                                <p className="text-ts text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">Email</label>
                            <Input type="Email" placeholder="Ej:email@gmail.com" className="placeholder:text-slate-500 text-slate-800" {...register("email")} />
                            {errors.email && (
                                <p className="text-ts text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">Contraseña</label>

                            <div className="relative">
                                <Input type={showPassword ? "text" : "password"} placeholder="Ej:*********" className="placeholder:text-slate-500 text-slate-800" {...register("password")} />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-500 hover-text-slate-700 cursor-pointer">
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-ts text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">Confirmar Contraseña</label>

                            <div className="relative">
                                <Input type={showConfirmPassword ? "text" : "password"} placeholder="Ej:*********" className="placeholder:text-slate-500 text-slate-800" {...register("confirmPassword")} />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 cursor-pointer">
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {errors.confirmPassword && (
                                <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">Fecha de nacimiento</label>
                            <Input type="date"
                                min="1900-01-01"
                                max={new Date().toISOString().split("T")[0]}
                                className="text-slate-800"
                                {...register("birthDate")} />

                            {errors.birthDate && (
                                <p className="text-xs text-red-500">{errors.birthDate.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">DNI</label>
                            <Input type="text" inputMode="numeric"{...register("dni")} className="placeholder:text-slate-500 text-slate-800" placeholder="123456789" onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "")
                            }} />

                            {errors.dni && (
                                <p className="text-red-500 text-xs">{errors.dni.message}</p>
                            )}
                        </div>

                        <Button type="submit" disabled={!isValid} className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed">Registrate</Button>

                        <p className="text-sm text-center text-slate-500">
                            ¿Ya estás registrado?{" "}
                            <span className="text-blue-600 hover:underline cursor-pointer">Iniciar sesión</span>
                        </p>

                    </form>
                </Card>
            </AuthContainer>
        </div >
    )
}