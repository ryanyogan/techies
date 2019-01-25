// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MeetupResolvers } from "../graphqlgen";

export const Meetup: MeetupResolvers.Type = {
  ...MeetupResolvers.defaultResolvers,

  organizer: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  attendees: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
};
