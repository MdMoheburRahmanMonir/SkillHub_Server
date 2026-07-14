import { Router } from "express";
import { DeleteUserSingleData, GetAllUserData, GetSingleData, getSomeData, GetUserAllData, getUsers, postSomeData } from "./user.controller.js";
import { VerifyJWT } from "../../middlewares/verifyJWT.js";

const router = Router();

router.get("/", getUsers);
router.get("/hello", getSomeData)
router.post("/post", VerifyJWT, postSomeData)
router.get("/get_user_post", VerifyJWT, GetUserAllData)
router.delete("/delete_post/:id", VerifyJWT, DeleteUserSingleData)
router.get("/posts_details/:id", GetSingleData) 
router.get("/get_all_data", GetAllUserData)

export default router;