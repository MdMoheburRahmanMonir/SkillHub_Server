    import { Router } from "express";
    import { getSomeData, getUsers } from "./user.controller.js";

    const router = Router();

    router.get("/", getUsers);
    router.get("/hello", getSomeData)

    export default router;