import { prisma } from "@/config";
import { TransactionBody } from "@/protocols";

async function postByuserId(userId: number, body: TransactionBody) {

    await prisma.transactions.create({
      data: {
        amount: body.amount,
        cardLatsDigits: body.cardLatsDigits,
        cardName: body.cardName,
        cardExpirationDate: body.cardExpirationDate,
        cardCvv: body.cardCvv,
        userId: userId
      }
    });

    return prisma.transactions.findMany({
      where: {userId:userId}
    });
  }

  const transactionRepository = {
    postByuserId
  };
  
  export default transactionRepository;