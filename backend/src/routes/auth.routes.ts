import { Router } from "express";
import { validateDto } from "../middlewares/validateDto";
import { RegisterDto } from "../dtos/auth/register.dto";
import { asyncHandler } from "../middlewares/asyncHandler";
import { login, register } from "../controllers/auth.controller";
import { LoginDto } from "../dtos/auth/login.dto";

const router = Router()

router.post("/register", validateDto(RegisterDto), asyncHandler(register))
router.post("/login", validateDto(LoginDto), asyncHandler(login))


export default router;

