export type ApplicationError = {
    name: string;
    message: string;
  };
  
  
  //Regra de Negócio
  export type TransactionBody = {
    id?: number,
    amount?: number,
    cardLatsDigits: string,
    cardName: string,
    cardExpirationDate: string,
    cardCvv: string
  }

  export type PayableBody = {
    amount: number,
    fee: string,
    status: string,
    paymentDate: string,
    transactionId: number
  }

  export const PayableStatus = {
    PENDENTE: 'pendente',
    LIQUIDADO: 'liquidado'
  };


  
  export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
  };