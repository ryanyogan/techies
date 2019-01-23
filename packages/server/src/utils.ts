import { verify } from "jsonwebtoken";

interface Token {
  userId: string;
}

interface Context {
  request: any;
}

const getUserId = (context: Context) => {
  const Authorization = context.request.get("Authorization");

  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = verify(token, process.env.APP_SECRET as any) as Token;
    return userId;
  }

  throw new AuthError();
};

class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

export { getUserId, AuthError };
