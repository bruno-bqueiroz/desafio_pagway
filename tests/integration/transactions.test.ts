import app, { init } from "@/app";
import { prisma } from "@/config";
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

describe("POST /transaction", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/transaction");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();

    const response = await server.get("/transaction").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.get("/transaction").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

    describe("when token is valid", () => {
  
      it("should respond with status 400 if body is missing", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
  
        const response = await server.post("/transaction").set("Authorization", `Bearer ${token}`).send();
  
        expect(response.status).toEqual(httpStatus.BAD_REQUEST);
      });
  
      it("should respond with status 200 and with transaction data", async () => {
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
  
        const response = await server.post("/transaction").set("Authorization", `Bearer ${token}`).send(body);
  
        expect(response.status).toEqual(httpStatus.OK);
          expect(Array.isArray(response.body)).toBe(true);
          expect(response.body.length).toBeGreaterThan(0);
          expect(typeof response.body[0]).toBe('object');
          expect(response.body[0]).toHaveProperty('amount');
        });

      });
    });