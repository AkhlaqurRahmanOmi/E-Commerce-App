import { Request, Response } from "express";
import { db } from "../../db/index.js";
import { productsTable } from "../../db/ProductSchema.js";
import { eq } from "drizzle-orm";
import _ from "lodash";

import { createProductSchema } from "../../db/ProductSchema";

export async function listProduct(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.json(products);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.cleanBody)
      .returning();
    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const updateFields = req.cleanBody;
  try {
    const [product] = await db
      .update(productsTable)
      .set(updateFields)
      .where(eq(productsTable.id, Number(id)))
      .returning();
    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const [deletedItem] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(id)))
      .returning();
    if (deletedItem) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
}
