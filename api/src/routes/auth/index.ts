import { Router } from "express";
import bcrypt from 'bcryptjs'
import { createUserSchema, loginSchema, usersTable } from "../../db/usersSchema";
import { validateData } from "../../middlewares/validationMiddleware";
import { db } from "../../db/index";
import {  login, register } from "./Controller";


const router = Router()

router.post('/register',validateData(createUserSchema),register)

router.post('/login',validateData(loginSchema),login)

export default router;
