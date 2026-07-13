import { type Request, type Response } from "express";
import { getAllUsers } from "./user.service.js";

export const getUsers = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.status(200).json({
        success: true,
        data: users,
    });
};

export const getSomeData = async (req: Request, res: Response) => {
   
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: "result Is here",
    });

}