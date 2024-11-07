import { Router } from "express";
import bcrypt from 'bcryptjs'
import { createUserSchema, loginSchema } from "../../db/usersSchema.js";
import { validateData } from "../../middlewares/validationMiddleware.js";
import {  login, register } from "./Controller.js";


const router = Router()

router.post('/register',validateData(createUserSchema),register)

router.post('/login',validateData(loginSchema),login)

export default router;
