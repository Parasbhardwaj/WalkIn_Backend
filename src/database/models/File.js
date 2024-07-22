const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: { type: String, required: true,lowercase: true, unique: true},
    path: { type: String, required: true},
    originalname: { type: String, required: true}
},{
    timestamps: true
})

const File = mongoose.model('Files',fileSchema)

module.exports = File