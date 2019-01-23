import { AuthPayloadResolvers } from "../generated/graphqlgen";

export const AuthPayload: AuthPayloadResolvers.Type = {
  ...AuthPayloadResolvers.defaultResolvers,

  user: async ({ user: { id } }, _, ctx) => ctx.prisma.user({ id }),
};
