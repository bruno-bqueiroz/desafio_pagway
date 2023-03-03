import app, { init } from "@/app";
import faker from "@faker-js/faker";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import supertest from "supertest";
import {
  createUser,
} from "../factories";
import { generateValidToken } from "../helpers";

beforeAll(async () => {
  await init();
});



const server = supertest(app);

describe("POST /payable", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/payable");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();

    const response = await server.get("/payable").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.get("/payable").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

    describe("when token is valid", () => {
      
      it("should respond with status 200 and with payable data", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
  
        const body = {
          "email": "bruno2@gmail.com",
          "amount": 199,
          "cardLatsDigits": "4444",
          "cardName": "BRUNO BARBOSA",
          "cardExpirationDate": "12/2024",
          "cardCvv": "1233"
        };
  
         await server.post("/transaction").set("Authorization", `Bearer ${token}`).send(body);
        const response = await server.get("/payable").set("Authorization", `Bearer ${token}`);
  
        expect(response.status).toEqual(httpStatus.OK);
          expect(typeof response.body).toBe('object');
          expect(response.body).toHaveProperty('liquidado');
          expect(response.body).toHaveProperty('pendente');
      });

    });
});