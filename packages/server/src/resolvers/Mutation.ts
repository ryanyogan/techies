import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { MutationResolvers } from "../generated/graphqlgen";
import { getUserId } from "../utils";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  async signup(_, args, context) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET as any),
      user,
    };
  },

  async login(_, { email, password }, context) {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new Error("Invalid password");
    }
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET as any),
      user,
    };
  },

  async createMeetup(_, { title, description, date, location }, ctx) {
    const userId = getUserId(ctx);
    return ctx.prisma.createMeetup({
      title,
      date,
      description,
      location,
      organizer: {
        connect: { id: userId },
      },
    });
  },

  async attending(_, { id }, context) {
    const userId = getUserId(context);
    const meetupExists = await context.prisma.$exists.meetup({
      id,
    });

    if (!meetupExists) {
      throw new Error(`Sorry, meetup not found!`);
    }

    return context.prisma.updateMeetup({
      where: { id },
      data: {
        attendees: {
          connect: {
            id: userId,
          },
        },
      },
    });
  },

  async notAttending(_, { id }, context) {
    const userId = getUserId(context);
    const meetupExists = await context.prisma.$exists.meetup({
      id,
    });
    if (!meetupExists) {
      throw new Error(`Sorry, meetup not found!`);
    }

    return context.prisma.updateMeetup({
      where: { id },
      data: {
        attendees: {
          disconnect: {
            id: userId,
          },
        },
      },
    });
  },
};
