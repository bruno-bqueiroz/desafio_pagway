import { transactionPost } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const transactionRouter = Router();

transactionRouter
    .all("/*", authenticateToken)
    .post("",  transactionPost)

export { transactionRouter };