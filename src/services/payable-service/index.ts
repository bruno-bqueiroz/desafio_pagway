import { notFoundError } from "../transaction-service/errors";
import payableRepository from "@/repositories/payable-repository";

export async function getPayable(userId: number) {
    
    const data = await payableRepository.getByuserId(userId);

    if(data === null) throw notFoundError();

    return data;
}
