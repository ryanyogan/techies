interface Context {
  request: any;
  response: any;
}

const getUserId = (context: Context) => {
  const { userId } = context.request;
  if (userId) {
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
