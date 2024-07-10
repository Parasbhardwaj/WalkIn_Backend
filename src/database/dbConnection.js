const mongoose = require('mongoose')

const { mongoDbUrl } = require('../../config')

function mongoSetup() {
    mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));  
}

module.exports = { mongoSetup }