import { Router } from "express";
import { getUsers } from "../controllers/user.controller"
import { getUserById } from "../controllers/user.controller";



const router: Router = Router();

router.get("/", getUsers)
router.get("/:id", getUserById)


export default router;