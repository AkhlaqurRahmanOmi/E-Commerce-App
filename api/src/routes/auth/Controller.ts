import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import { createUserSchema,usersTable } from "../../db/usersSchema.js";
import {db} from '../../db/index.js'
import { eq } from "drizzle-orm";
import jwt from 'jsonwebtoken'

const generateUserToken = (user: any) => {
  return jwt.sign({ userId: user.id, role: user.role }, "your-secret", {
    expiresIn: "30d",
  });
};

export async function register(req:Request, res: Response) {
    try{
      const data = req.cleanBody;
      data.password = await bcrypt.hash(data.password, 10);
      const [user] = await db.insert(usersTable).values(data).returning();
      // @ts-ignore
      delete user.password;

      const token= generateUserToken(user)
      res.status(201).json({ user,token });
    }catch(e){
        res.status(500).send(e);
    }
}


export async function login(req:Request, res: Response) {
    try{
      const { email, password } = req.cleanBody;

      //user exist or not checking
      const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
      if (!user) {
        res.status(401).json({ error: "auth failed" });
        return;
      }

      //password checking
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
        res.status(401).json({ error: "auth failed" });
        return;
      }
      // @ts-ignore
      delete user.password;
      // implementing jwt
      const token = generateUserToken(user)
      res.status(200).json({ token, user });
    }catch(e){
        res.status(500).send(e)
    }
}