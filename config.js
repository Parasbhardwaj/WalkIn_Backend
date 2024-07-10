require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    mongoDbUrl: process.env.MONGO_DB_URL
}