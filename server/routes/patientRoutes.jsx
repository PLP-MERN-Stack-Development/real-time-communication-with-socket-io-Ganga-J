const express = require ('express');
const router = express.Router();
const Patient = require('../models/patients');


// create patient

router.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
});


