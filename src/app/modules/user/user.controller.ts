import { type Request, type Response } from "express";
import { getAllUsers, PostSkill } from "./user.service.js";
import { db } from "../../db/mongodb.js";
import { ObjectId } from "mongodb";

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
export const postSomeData = async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)
    const serverRes = await PostSkill(data)
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: serverRes,
    })
}

export const GetUserAllData = async (req: Request, res: Response) => {
    const { creatorId } = req.query;
    const serverRes = await db.collection("skill").find({ creatorId: creatorId }).toArray();
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: serverRes,
    })
}
export const DeleteUserSingleData = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const serverRes = await db.collection("skill").deleteOne({ _id: new ObjectId(id) });
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: serverRes,
    })
}

export const GetSingleData = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const serverRes = await db.collection("skill").findOne({ _id: new ObjectId(id) });
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: serverRes,
    })
}
export const GetAllUserData = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const serverRes = await db.collection("skill").find().toArray();
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: serverRes,
    })
}