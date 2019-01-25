import { Prisma, User } from "./generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request: any;
  response: any;
}

export interface AuthPayload {
  token: string;
  user: User;
}
