const AuthPayload = {
  user: async ({ user: { id } }, _, ctx) => ctx.prisma.user({ id })
};

module.exports = { AuthPayload };
