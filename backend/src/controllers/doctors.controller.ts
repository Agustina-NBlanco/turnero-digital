import { Request, Response } from "express";
import { CreateDoctorDto } from "../dtos/doctor/create-doctor.dto";
import { UpdateDoctorDto } from "../dtos/doctor/update-doctor.dto";
import {
    getDoctors as getDoctorsService,
    getDoctorById as getDoctorByIdService,
    createDoctor as createDoctorService,
    updateDoctor as updateDoctorService,
    deleteDoctor as deleteDoctorService
} from "../services/doctors.service"




export const getDoctors = async (req: Request, res: Response) => {

}

export const getDoctorById = async (req: Request<{ id: string }>, res: Response) => {

}

export const createDoctor = async (req: Request<{}, {}, CreateDoctorDto>, res: Response) => {

}

export const updateDoctor = async (req: Request<{ id: string }, {}, UpdateDoctorDto>, res: Response) => {

}

export const deleteDoctor = async (req: Request<{ id: string }>, res: Response) => {

}