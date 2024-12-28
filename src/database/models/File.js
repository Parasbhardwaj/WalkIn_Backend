const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: { type: String, required: true,lowercase: true, unique: true},
    contentType: { type: String, required: true},
    data: { type: String, required: true}
},{
    timestamps: true
})

const File = mongoose.model('Files',fileSchema)

module.exports = File