import { Router } from "express";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import {z}  from 'zod'


import { listProduct, getProductById, createProduct,updateProduct,deleteProduct } from "./Controller";
import { validateData } from "../../middlewares/validationMiddleware";
import { productsTable } from "../../db/ProductSchema";

const creatProductSchema = createInsertSchema(productsTable)

// product endpoint
const router = Router()
router.get('/',listProduct)
router.get('/:id', getProductById)
router.post('/',validateData(creatProductSchema), createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
export default router