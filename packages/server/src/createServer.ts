import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { resolvers } from "./resolvers";

const createServer = () =>
  new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: resolvers as any,
    context: request => ({
      ...request,
      prisma,
    }),
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
  });

export default createServer;
