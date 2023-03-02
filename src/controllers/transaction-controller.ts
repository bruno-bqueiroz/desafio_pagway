import { AuthenticatedRequest } from "@/middlewares";
import { TransactionBody } from "@/protocols"; 
import {postTransaction} from "@/services/transaction-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function transactionPost(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

  const body = req.body as TransactionBody;

  try {
    const transactions = await postTransaction(userId, body);

    return res.status(httpStatus.OK).send(transactions);
  } catch (error) {
    if(error)
    if (error.name === "notFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    } else{
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    
  }
}