import { Router } from "express";
import { getAppointmentById, getAppointments } from "../controllers/appointments.controller";



const router: Router = Router();

router.get("/", getAppointments)
router.get("/:id", getAppointmentById)

export default router;