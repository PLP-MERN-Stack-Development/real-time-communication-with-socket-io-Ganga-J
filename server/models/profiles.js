const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: false },
    gender: { type: String, required: false },
    contactNumber: { type: Number, required: false },
    bio: { type: String, required: false },
}, { timestamps: true });

// text index for quick searching
profileSchema.index({ name: 'text', bio: 'text' });
profileSchema.index({ contactNumber: 1 });

// export the model
module.exports = mongoose.model('Profile', profileSchema);
