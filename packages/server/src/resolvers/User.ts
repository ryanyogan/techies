import { UserResolvers } from "../generated/graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  myMeetups: ({ id }, _, ctx) => {
    return ctx.prisma.user({ id }).myMeetups();
  },
  meetupsAttending: ({ id }, _, ctx) => {
    return ctx.prisma.user({ id }).meetupsAttending();
  },
};
