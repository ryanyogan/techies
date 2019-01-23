import { QueryResolvers } from "../generated/graphqlgen";
import { getUserId } from "../utils";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  meetups: async (_, __, { prisma }) =>
    prisma.meetups({ orderBy: "date_DESC" }),

  meetup: async (_, { id }, { prisma }) => prisma.meetup({ id }),

  me: async (_, __, ctx) => {
    const id = await getUserId(ctx);

    return ctx.prisma.user({ id });
  },
};
