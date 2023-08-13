import express from "express";
import trimRequest from "trim-request";
import {
    login, logout, refreshtoken,
    register,
} from "../controllers/auth.controller.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/register").post(trimRequest.all, register);
router.route("/login").post(trimRequest.all, login);
router.route("/logout").post(trimRequest.all, logout);
router.route("/refreshtoken").post(trimRequest.all, refreshtoken);

router.route("/token").get(trimRequest.all, authMiddleware, (req,res)=>{
console.log("hgfg",   req.user)
});



export default router;