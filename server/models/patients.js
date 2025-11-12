const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age : {type:Number, required: true},
    gender: {type: String, required: true},
    contactNumber: {type: Number, required: true},
    medicalHistory: {type: String, required: false},
}, {timestamps: true});

patientSchema.index({name: 'text', medicalHistory: 'text'});
patientSchema.index({contactNumber: 1});

// show time patient was created
patientSchema.pre('save', function(next) {
    this.createdAt = Date.now();
    next();
});

// sort the patients by createdAt in descending order
patientSchema.pre('find', function(next) {
    this.sort({createdAt: -1});
    next();
}   );

// export the model

module.exports = mongoose.model('Patient', patientSchema);

