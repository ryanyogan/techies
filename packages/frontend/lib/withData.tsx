import withApollo from "next-with-apollo";
import ApolloClient, { Operation } from "apollo-boost";

const ENDPOINT = "http://localhost:4000";

const createClient = ({ headers }): any =>
  new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? ENDPOINT : ENDPOINT,

    request: (operation: Operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "same-origin",
        },
        headers,
      });
    },
  });

export default withApollo(createClient);
