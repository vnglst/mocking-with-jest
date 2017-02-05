const rest = require('rest')
const mime = require('rest/interceptor/mime')

export default rest.wrap(mime)
