"use client"

import AuthContainer from "@/components/auth/AuthContainer"
import AuthLeftSide from "@/components/auth/AuthLeftSide"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import { LoginSchema } from "@/lib/validations/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type LoginFormData = z.infer<typeof LoginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange"
  })
  const onSubmit = (data: LoginFormData) => console.log(data)

  return (
    <div className="min-h-screen flex">
      <AuthLeftSide />

      <AuthContainer>
        <Card className="w-full shadow-xl rounded-2xl">

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">Iniciar sesión</h2>
            <p className="text-sm text-slate-500">Accedé a tu cuenta</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600">Email</label>
              <Input type="email"{...register("email")} className="placeholder:text-slate-500 text-slate-800" placeholder="email@gmail.com" />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600">Contraseña</label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="pr-10 placeholder:text-slate-500 text-slate-800"
                  placeholder="********"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 cursor-pointer">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <Input
                  type="checkbox"
                  className="accent-blue-600" />Recordarme
              </label>
              <span className="text-blue-600 hover:underline cursor-pointer">¿Olvidaste tu contraseña?</span>
            </div>

            <Button type="submit" disabled={!isValid} className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-90 text-white disabled:opacity-50 disabled:cursor-not-allowed">Iniciar sesión</Button>
            <p className="text-sm text-center text-slate-500">¿No tenés cuenta?{" "}</p>

          </form>
        </Card>
      </AuthContainer>
    </div >
  )
}