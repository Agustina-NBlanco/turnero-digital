import { DataSource } from "typeorm";
import { ENV } from "./env";
import { User } from "../entities/User";



export const AppDataSource = new DataSource ({
    type: "postgres",
    host: ENV.DB_HOST,
    port: ENV.DB_PORT,
    username: ENV.DB_USERNAME,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User]
})