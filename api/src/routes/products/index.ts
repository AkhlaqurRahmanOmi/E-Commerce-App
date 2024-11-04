import { Router } from "express";

import { listProduct, getProductById, createProduct,updateProduct,deleteProduct } from "./Controller";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema, productsTable, updateProductSchema } from "../../db/ProductSchema";


// type ProductType = z.infer<typeof createProductSchema>;
// product endpoint
const router = Router()
router.get('/',listProduct)
router.get('/:id', getProductById)
router.post('/',validateData(createProductSchema), createProduct)
router.put('/:id', validateData(updateProductSchema), updateProduct)
router.delete('/:id', deleteProduct)
export default router