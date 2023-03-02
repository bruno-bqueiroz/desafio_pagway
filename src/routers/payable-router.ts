import { payableGet } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const payableRouter = Router();

payableRouter
    .all("/*", authenticateToken)
    .post("",  payableGet)

export { payableRouter };