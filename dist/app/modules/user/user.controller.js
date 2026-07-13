import {} from "express";
import { getAllUsers } from "./user.service.js";
export const getUsers = (req, res) => {
    const users = getAllUsers();
    res.status(200).json({
        success: true,
        data: users,
    });
};
//# sourceMappingURL=user.controller.js.map