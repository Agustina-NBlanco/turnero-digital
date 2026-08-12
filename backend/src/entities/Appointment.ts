import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { User } from "./User";
import { Doctor } from "./Doctor";


@Unique(["date", "time", "doctor"])
@Entity({ name: "appointments" })
export class Appointment {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column({ type: "enum", enum: AppointmentStatus, default: AppointmentStatus.PENDING })
    status!: AppointmentStatus;

    @ManyToOne(() => User, user => user.appointments)
    user!: User;

    @ManyToOne(() => Doctor, doctor => doctor.appointments)
    doctor!: Doctor;
}