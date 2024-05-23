const User = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }

      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password, onMailList }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
