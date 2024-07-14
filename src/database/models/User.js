const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true,lowercase: true, unique: true},
    password: { type: String, required: true},
    userType: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    mobileNumber: { type: String, required: true}
},{
    timestamps: true
})

const User = mongoose.model('Users',userSchema)

module.exports = User