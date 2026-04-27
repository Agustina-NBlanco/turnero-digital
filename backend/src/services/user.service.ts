import { AppDataSource } from "../config/data-source"
import { User } from "../entities/User"


const userRepository = AppDataSource.getRepository(User)

export const getUsers = async (): Promise<User[]> => {
    return await userRepository.find()
}

export const getUserById = async (id: string): Promise<User | null> => {
    return await userRepository.findOne({ where: { id } })
}
