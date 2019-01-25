import * as jwt from "jsonwebtoken";
import * as cookieParser from "cookie-parser";
import createServer from "./createServer";
import { prisma } from "./generated/prisma-client";

const server = createServer();

server.express.use(cookieParser());

server.express.use((req: any, _, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId }: any = jwt.verify(token, process.env.APP_SECRET as any);
    req.userId = userId;
  }

  next();
});

server.express.use(async (req: any, _, next) => {
  if (!req.userId) return next();

  const user = await prisma.user({ id: req.userId });
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:7777",
    },
  },
  info => console.log(`> Server is listening on http://localhost:${info.port}`)
);
