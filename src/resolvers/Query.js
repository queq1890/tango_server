const { getUserId } = require('../utils');
const { forwardTo } = require('prisma-binding');

const Query = {
  info: () => `GraphQL API of Reporting System`
};

module.exports = { Query };
