import { payableGet } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const payableRouter = Router();

payableRouter
    .all("/*", authenticateToken)
    .get("",  payableGet)

export { payableRouter };