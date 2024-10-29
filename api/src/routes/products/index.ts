import { Router } from "express";

import { listProduct, getProductById, createProduct,updateProduct,deleteProduct } from "./Controller";

// product endpoint
const router = Router()
router.get('/',listProduct)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
export default router