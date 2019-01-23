const { getUserId } = require("../../utils");

const meetup = {
  async createMeetup(_, { title, description, date, location }, ctx) {
    const userId = getUserId(ctx);
    return ctx.prisma.createMeetup({
      title,
      content,
      date,
      description,
      location,
      organizer: {
        connect: { id: userId }
      }
    });
  },

  async attending(_, { id }, context) {
    const userId = getUserId(context);
    const meetupExists = await context.prisma.$exists.meetup({
      id
    });
    if (!meetupExists) {
      throw new Error(`Sorry, meetup not found!`);
    }

    return context.prisma.updateMeetup({
      where: { id },
      data: {
        attendees: {
          connect: {
            id: userId
          }
        }
      }
    });
  },

  async notAttending(_, { id }, context) {
    const userId = getUserId(context);
    const meetupExists = await context.prisma.$exists.meetup({
      id
    });
    if (!meetupExists) {
      throw new Error(`Sorry, meetup not found!`);
    }

    return context.prisma.updateMeetup({
      where: { id },
      data: {
        attendees: {
          disconnect: {
            id: userId
          }
        }
      }
    });
  }
};

module.exports = { meetup };
