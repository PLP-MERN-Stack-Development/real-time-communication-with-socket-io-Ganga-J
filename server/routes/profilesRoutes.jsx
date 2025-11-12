const express = require ('express');
const router = express.Router();
const Profile = require('../models/profiles');

// READ ALL PROFILES
router.get('/profiles', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).send(profiles);
    } catch (error) {
        res.status(500).send(error);
    }
});

// other profile endpoints can be added as needed

module.exports = router;
