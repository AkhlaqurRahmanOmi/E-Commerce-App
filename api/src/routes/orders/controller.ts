import { Request, Response } from "express";
import { db } from "../../db/index.js";
import { orderItemsTable, ordersTable } from "../../db/ordersSchema.js";


export async function createOrder(req:Request,res: Response) {
    try{
        const {order, items} = req.cleanBody;
        const userId = req.userId;
        if(!userId){
            res.status(404).json({ message: "Invalid order data" });
        }
        const [newOrder] = await db.insert(ordersTable).values({userId:userId}).returning()

        const orderItems= items.map((item: any)=>({
            ...items,
            orderId: newOrder.id,
        }))
        const newOrderItems=await db.insert(orderItemsTable).values(orderItems).returning();
    }catch(e){
        res.status(404).json({message: "Invalid order data"})
    }
}