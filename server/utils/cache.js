const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600 }); // Cache TTL set to 1 hour

module.exports = cache;
