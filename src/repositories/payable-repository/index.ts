import { prisma } from "@/config";
import { PayableStatus } from "@/protocols";

async function postByTransactionId(userId: number, amount: number, date: string) {
  return prisma.payables.create({
    data: {
      amount: amount*100,
      fee: '0.05',
      status: PayableStatus.PENDENTE,
      paymentDate: date,
      userId: userId
    }
  });
}

async function getByuserId(userId: number) {
  return prisma.payables.findMany({
    where: {userId: userId}
  });
}


  const payableRepository = {
    postByTransactionId,
    getByuserId
  };
  
  export default payableRepository;