import { Router } from "express";
import userRouter from "./user.routes";
import appointmentsRouter from "./appointments.routes";

const router: Router = Router();

router.use("/", (req, res) => { res.send("Hello World!") });
router.use("/users", userRouter)
router.use("/appointments", appointmentsRouter)

export default router;