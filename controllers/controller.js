

// hopitalController.js

const express = require('express');
const routeur = express.Router();
const Hopital = require('../models/Hopital'); // Assurez-vous d'avoir défini le modèle Hopital

// Route pour récupérer tous les hôpitaux
router.get('/', async (req, res) => {
    try {
        const hopital = await Hopital.find();
        res.json(hopital);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un hôpital par ID
router.get('/:id', async (req, res) => {
    try {
        const hopital = await Hospital.findById(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hôpital non trouvé' });
        }
        res.json(hopital);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// faire d Autres routes pour la création, la mise à jour et la suppression d'un hôpital

module.exports = router;

const express = require('express');
const route = express.Router();
const Hospital = require('../model/Hospital'); // Assurez-vous d'avoir défini le modèle Hospital

// Route pour récupérer tous les hôpitaux
router.get('/', async (req, res) => {
    try {
        const hospitals = await Hopital.find();
        res.json(hopitals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un hôpital par ID
router.get('/:id', async (req, res) => {
    try {
        const hopital = await Hospital.findById(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hôpital non trouvé' });
        }
        res.json(hopital);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// faire d Autres routes pour la création, la mise à jour et la suppression d'un hôpital

module.exports = Routes;

// routes/patient.js

const express = require('express');
const Routes = express.Router();
const Patient = require('../models/Patient'); // Assurez-vous d'avoir défini le modèle Patient

// Route pour récupérer tous les patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un patient par ID
router.get('/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient non trouvé' });
        }
        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour créer un nouveau patient
router.post('/', async (req, res) => {
    try {
        const { nom, prenom, adresse, ville, telephone, dateNaissance, numeroSecuSociale } = req.body;
        const newPatient = new Patient({
            nom,
            prenom,
            adresse,
            ville,
            telephone,
            dateNaissance,
            numeroSecuSociale
        });

        const patient = await newPatient.save();
        res.status(201).json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour mettre à jour un patient par ID
router.put('/:id', async (req, res) => {
    try {
        const { nom, prenom, adresse, ville, telephone, dateNaissance, numeroSecuSociale } = req.body;
        const updatedPatient = {
            nom,
            prenom,
            adresse,
            ville,
            telephone,
            dateNaissance,
            numeroSecuSociale
        };

        const patient = await Patient.findByIdAndUpdate(req.params.id, updatedPatient, { new: true });
        if (!patient) {
            return res.status(404).json({ message: 'Patient non trouvé' });
        }
        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour supprimer un patient par ID
router.delete('/:id', async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient non trouvé' });
        }
        res.json({ message: 'Patient supprimé' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;


// routes/services.js

const express = require('express');
const routes = express.Router();
const Service = require('../models/Service'); // Assurez-vous d'avoir défini le modèle Service

// Route pour récupérer tous les services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un service par ID
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service non trouvé' });
        }
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour créer un nouveau service
router.post('/', async (req, res) => {
    try {
        const { nom, description } = req.body;
        const newService = new Service({
            nom,
            description
        });

        const service = await newService.save();
        res.status(201).json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour mettre à jour un service par ID
router.put('/:id', async (req, res) => {
    try {
        const { nom, description } = req.body;
        const updatedService = {
            nom,
            description
        };

        const service = await Service.findByIdAndUpdate(req.params.id, updatedService, { new: true });
        if (!service) {
            return res.status(404).json({ message: 'Service non trouvé' });
        }
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour supprimer un service par ID
router.delete('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service non trouvé' });
        }
        res.json({ message: 'Service supprimé' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports


// controllers gestionnaires

const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital'); // Assurez-vous d'avoir défini le modèle Hospital
const Patient = require('../models/Patient'); // Assurez-vous d'avoir défini le modèle Patient
const Service = require('../models/Service'); // Assurez-vous d'avoir défini le modèle Service