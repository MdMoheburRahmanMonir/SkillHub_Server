import { type Request, type Response } from "express";
import { getAllUsers } from "./user.service.js";

export const getUsers = (req: Request, res: Response) => {
    const users = getAllUsers();

    res.status(200).json({
        success: true,
        data: users,
    });
};