import { Router, Request, Response } from "express";
// import User  from "../models/userModel";
// import { client } from "../db/db-connection";
import sequelize from "db/db-connection";


const router = Router();

// GET /Allusers
// router.get("/", async (req: Request, res: Response<User[]>) => {

//   try {
//     const results = await client.query("SELECT * FROM users");
//     const users: User[] = results.rows;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }

//     const users: User[] = [
//         {
//             id: 2,
//         },
//     ];

//   res.json(users);
// });

// POST /users

router.post("/", (req: Request, res: Response) => {
  const { 
    firstName,
    lastName,
    address,
    email,
    zip,
    state,
    city,
    country,
    phone,
    password
   } = req.body;
  res.json({ message: `User ${firstName} created` });
});

export default router;


