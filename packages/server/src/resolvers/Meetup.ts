import { MeetupResolvers } from "../generated/graphqlgen";

export const Meetup: MeetupResolvers.Type = {
  ...MeetupResolvers.defaultResolvers,

  organizer: ({ id }, _, ctx) => {
    return ctx.prisma.meetup({ id }).organizer();
  },
  attendees: ({ id }, _, ctx) => {
    return ctx.prisma.meetup({ id }).attendees();
  },
};
