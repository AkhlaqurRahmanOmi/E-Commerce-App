import { Router } from "express";

import {
  listProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./Controller";
import { validateData } from "../../middlewares/validationMiddleware";
import {
  createProductSchema,
  productsTable,
  updateProductSchema,
} from "../../db/ProductSchema";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware";

// type ProductType = z.infer<typeof createProductSchema>;
// product endpoint
const router = Router();
router.get("/", listProduct);
router.get("/:id", getProductById);
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);
export default router;
