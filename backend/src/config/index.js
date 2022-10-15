require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3005,
    fileEndpointBase:process.env.FILE_ENDPOINT_BASE,
    tokenFileEndpoint:process.env.TOKEN_FILE_ENDPOINT
}
