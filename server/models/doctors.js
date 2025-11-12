const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    specialization : {type:String, required: true},
    contactNumber: {type: Number, required: true},
    availability: {type: String, required: false},
}, {timestamps: true});


module.exports = mongoose.model('Doctor', doctorSchema);

