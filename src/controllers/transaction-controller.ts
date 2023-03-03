import { AuthenticatedRequest } from "@/middlewares";
import { TransactionBody } from "@/protocols"; 
import {postTransaction} from "@/services/transaction-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function transactionPost(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

  const body = req.body as TransactionBody;
  if(!body.amount) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const transactions = await postTransaction(userId, body);

    return res.status(httpStatus.OK).send(transactions);
  } catch (error) {
    if(error)
    if (error.name === "badRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    } else{
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    
  }
}