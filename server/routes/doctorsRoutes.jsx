// CRUD OPERATIONS FOR DOCTORS

const express = require('express');
const router = express.Router();

const Doctor = require('../models/doctors');
// CREATE DOCTOR

router.post('/doctors', async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }   
});

// READ ALL DOCTORS
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).send(doctors);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ DOCTOR BY ID
router.get('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }   
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE DOCTOR BY ID
router.put('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!doctor) {  
            return res.status(404).send();
        }       
        res.status(200).send(doctor);
    } catch (error) {
        res.status(400).send(error);    
    }
}   );

// DELETE DOCTOR BY ID      
router.delete('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);

        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
