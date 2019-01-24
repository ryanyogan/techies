import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

const endpoint =
  (process.env.NODE_ENV as any) === "production"
    ? (process.env.SERVER_ENDPOINT as any)
    : ("http://localhost:4000" as string);

const createClient = ({ headers }: any) => {
  // @ts-ignore
  return new ApolloClient({
    uri: endpoint,
    request: (operation: any) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
  });
};

export default withApollo(createClient);
