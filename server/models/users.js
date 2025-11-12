const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    bio: { type: String, required: false },
    contactNumber: { type: Number, required: false },
    status: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
