import { Router } from "express";
import userRouter from "./user.routes";


const router: Router = Router();

router.use("/", (req, res) => { res.send("Hello World!") });
router.use("/users", userRouter)

export default router;