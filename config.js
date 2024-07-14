require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    mongoDbUrl: process.env.MONGO_DB_URL,
    accessSecretKey: process.env.ACCESS_SECRET_KEY,
    refreshSecretKey: process.env.REFRESH_SECRET_KEY
}