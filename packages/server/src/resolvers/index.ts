import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Meetup } from "./Meetup";
import { AuthPayload } from "./AuthPayload";
import { User } from "./User";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Meetup,
  User,
  AuthPayload,
};
