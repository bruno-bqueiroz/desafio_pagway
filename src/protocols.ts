export type ApplicationError = {
    name: string;
    message: string;
  };
  
  
  //Regra de Negócio
  export type AddressEnrollment = {
    logradouro: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    error?: string
  
  }
  
  export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
  };

  export type BodyDiary = {
    id?: number ,
    entrada: number,
    saida: number,
    horasTrabalhadas: number,
    KmPercorridos: number,
    NumeroViagens: number,
    date?: string,
    userId?: number
  }

  export type BodyGoals = {
    id?: number,
    meta: number,
    entrada?: number,
    month?: number,
    userId?: number
  }

  export type EnrollBody = 
  [
    {
      id?: number,
      name: string,
      cpf: string,
      city: string,
      state: string,
      userId?: number
    },
    { id?: number,
      marca: string,
      modelo: string,
      ano: number,
      userId?: number
    }
  ]
