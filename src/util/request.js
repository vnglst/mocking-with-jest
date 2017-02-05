const rest = require("rest");
const mime = require("rest/interceptor/mime");

module.exports = rest.wrap(mime);
