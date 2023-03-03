import transactionRepository from "@/repositories/transaction-repository";
import { badRequestError } from "./errors";
import { TransactionBody } from "@/protocols";
import payableRepository from "@/repositories/payable-repository";
import dayjs from 'dayjs'

const hoje = dayjs();
const day =  hoje.add(30, 'day');
const date = day.format('YYYY-MM-DD');

export async function postTransaction(userId: number, body: TransactionBody) {
    
    const data = await transactionRepository.postByuserId(userId, body);

    if(data === null) throw badRequestError();
    const amount = body.amount*0.95;
    const payables = await payableRepository.postByTransactionId(userId, amount, date);
    console.log(payables);
    return data;
}
