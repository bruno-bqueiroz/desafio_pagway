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

  const payableRepository = {
    postByTransactionId
  };
  
  export default payableRepository;