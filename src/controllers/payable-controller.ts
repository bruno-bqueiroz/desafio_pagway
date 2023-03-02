import { AuthenticatedRequest } from "@/middlewares";
import { PayableBody, PayableStatus} from "@/protocols";
import {getPayable} from "@/services/payable-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function payableGet(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    let saldoLiquidado = 0;
    let saldoPendente = 0;

  try {
    const payables = await getPayable(userId) as unknown as PayableBody;
    
    payables.map((v)=>{
        if(v.status === PayableStatus.LIQUIDADO){
            saldoLiquidado+= (v.amount / 100);
        } else if(v.status === PayableStatus.PENDENTE){
            saldoPendente+= (v.amount / 100);
        }
    });
    const data = {liquidado: saldoLiquidado.toFixed(2).replace(/\./g, ","),pendente: saldoPendente.toFixed(2).replace(/\./g, ",")}

    return res.status(httpStatus.OK).send(data);
  } catch (error) {
    if(error)
    if (error.name === "notFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    } else{
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    
  }
}