const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driveSchema = new Schema({
    driveId: { type: String, required: true},
    date: { type: Date, required: true},
    address: { type: String, required: true},
    contactPerson: { type: String, required: true},
    jobDescription: { type: String, required: true},
    time: { type: String, required: true}
},{
    timestamps: true
})

const Drive = mongoose.model('Drives',driveSchema)

module.exports = Drive