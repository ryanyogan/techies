const { getUserId } = require('../utils');

const Query = {
  meetups: async (_, __, { prisma }) =>
    prisma.meetups({ orderBy: 'date_DESC' }),

  meetup: async (_, { id }, { prisma }) => prisma.meetup({ id }),

  me: async (_, __, ctx) => {
    const id = await getUserId(ctx);

    const l = await ctx.prisma.user({ id });
    console.log(l);

    return ctx.prisma.user({ id });
  },
};

module.exports = { Query };
