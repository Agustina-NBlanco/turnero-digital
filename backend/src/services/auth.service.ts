import { error } from "node:console";
import { AppDataSource } from "../config/data-source";
import { LoginDto } from "../dtos/auth/login.dto";
import { RegisterDto } from "../dtos/auth/register.dto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { AppError } from "../utils/AppError";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

const userRepository = AppDataSource.getRepository(User)
const credentialRepository = AppDataSource.getRepository(Credential)

export const register = async (dto: RegisterDto) => {
    const existingUser = await userRepository.findOne({ where: { email: dto.email } })

    if (existingUser) throw new AppError("User already exists", 400)

    const hashedPassword = await hashPassword(dto.password)

    const user = userRepository.create({
        name: dto.name,
        email: dto.email,
        birthDate: dto.birthDate,
        nDni: dto.nDni,
    })
    await userRepository.save(user)

    const credential = credentialRepository.create({
        password: hashedPassword,
        user
    })
    await credentialRepository.save(credential)
    return user
}

export const login = async (dto: LoginDto) => {
    const user = await userRepository.findOne({ where: { email: dto.email }, relations: ["credential"] })

    if (!user) throw new AppError("Invalid Credentials", 401)

    const isvalid = await comparePassword(dto.password, user.credential.password)
    if (!isvalid) throw new AppError("Invalid Credentials", 401)

    const token = generateToken({ id: user.id, role: user.role })
    return { token }
}