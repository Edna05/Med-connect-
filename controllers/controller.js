//controller administrateur

import { Administrateur } from '../models/administrateur.js';

export class AdministrateursController {
  async getAllAdministrateurs(req, res) {
    try {
      const administrateurs = await Administrateur.find();
      res.json(administrateurs);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des administrateurs' });
    }
  }

  async getAdministrateurById(req, res) {
    try {
      const administrateur = await Administrateur.findById(req.params.id);
      if (!administrateur) {
        res.status(404).json({ message: 'Administrateur non trouvé' });
      } else {
        res.json(administrateur);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'administrateur' });
    }
  }

  async createAdministrateur(req, res) {
    try {
      const administrateur = new Administrateur(req.body);
      await administrateur.save();
      res.json(administrateur);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création de l\'administrateur' });
    }
  }

  async updateAdministrateur(req, res) {
    try {
      const administrateur = await Administrateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!administrateur) {
        res.status(404).json({ message: 'Administrateur non trouvé' });
      } else {
        res.json(administrateur);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'administrateur' });
    }
  }

  async deleteAdministrateur(req, res) {
    try {
      await Administrateur.findByIdAndRemove(req.params.id);
      res.json({ message: 'Administrateur supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'administrateur' });
    }
  }
}


//controller rendezvous
import { RendezVous } from '../models/rendez-vous.js';

export class RendezVousController {
  async getAllRendezVous(req, res) {
    try {
      const rendezVous = await RendezVous.find();
      res.json(rendezVous);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des rendez-vous' });
    }
  }

  async getRendezVousById(req, res) {
    try {
      const rendezVous = await RendezVous.findById(req.params.id);
      if (!rendezVous) {
        res.status(404).json({ message: 'Rendez-vous non trouvé' });
      } else {
        res.json(rendezVous);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération du rendez-vous' });
    }
  }

  async createRendezVous(req, res) {
    try {
      const rendezVous = new RendezVous(req.body);
      await rendezVous.save();
      res.json(rendezVous);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création du rendez-vous' });
    }
  }

  async updateRendezVous(req, res) {
    try {
      const rendezVous = await RendezVous.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!rendezVous) {
        res.status(404).json({ message: 'Rendez-vous non trouvé' });
      } else {
        res.json(rendezVous);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du rendez-vous' });
    }
  }

  async deleteRendezVous(req, res) {
    try {
      await RendezVous.findByIdAndRemove(req.params.id);
      res.json({ message: 'Rendez-vous supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression du rendez-vous' });
    }
  }
}


//controller Gestionnaire
import { Gestionnaire } from '../models/gestionnaire.js';

export class GestionnairesController {
  async getAllGestionnaires(req, res) {
    try {
      const gestionnaires = await Gestionnaire.find();
      res.json(gestionnaires);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des gestionnaires' });
    }
  }

  async getGestionnaireById(req, res) {
    try {
      const gestionnaire = await Gestionnaire.findById(req.params.id);
      if (!gestionnaire) {
        res.status(404).json({ message: 'Gestionnaire non trouvé' });
      } else {
        res.json(gestionnaire);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération du gestionnaire' });
    }
  }

  async createGestionnaire(req, res) {
    try {
      const gestionnaire = new Gestionnaire(req.body);
      await gestionnaire.save();
      res.json(gestionnaire);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création du gestionnaire' });
    }
  }

  async updateGestionnaire(req, res) {
    try {
      const gestionnaire = await Gestionnaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!gestionnaire) {
        res.status(404).json({ message: 'Gestionnaire non trouvé' });
      } else {
        res.json(gestionnaire);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du gestionnaire' });
    }
  }

  async deleteGestionnaire(req, res) {
    try {
      await Gestionnaire.findByIdAndRemove(req.params.id);
      res.json({ message: 'Gestionnaire supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression du gestionnaire' });
    }
  }
}
   
//controller hopital
import { Hopital } from '../models/hopital.js';

export class HopitauxController {
  async getAllHopitaux(req, res) {
    try {
      const hopitaux = await Hopital.find();
      res.json(hopitaux);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des hôpitaux' });
    }
  }

  async getHopitalById(req, res) {
    try {
      const hopital = await Hopital.findById(req.params.id);
      if (!hopital) {
        res.status(404).json({ message: 'Hôpital non trouvé' });
      } else {
        res.json(hopital);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'hôpital' });
    }
  }

  async createHopital(req, res) {
    try {
      const hopital = new Hopital(req.body);
      await hopital.save();
      res.json(hopital);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création de l\'hôpital' });
    }
  }

  async updateHopital(req, res) {
    try {
      const hopital = await Hopital.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!hopital) {
        res.status(404).json({ message: 'Hôpital non trouvé' });
      } else {
        res.json(hopital);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'hôpital' });
    }
  }

  async deleteHopital(req, res) {
    try {
      await Hopital.findByIdAndRemove(req.params.id);
      res.json({ message: 'Hôpital supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'hôpital' });
    }
  }
}

//controller medecin

import { Medecin } from '../models/medecin.js';

export class MedecinsController {
  async getAllMedecins(req, res) {
    try {
      const medecins = await Medecin.find();
      res.json(medecins);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des médecins' });
    }
  }

  async getMedecinById(req, res) {
    try {
      const medecin = await Medecin.findById(req.params.id);
      if (!medecin) {
        res.status(404).json({ message: 'Médecin non trouvé' });
      } else {
        res.json(medecin);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération du médecin' });
    }
  }

  async createMedecin(req, res) {
    try {
      const medecin = new Medecin(req.body);
      await medecin.save();
      res.json(medecin);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création du médecin' });
    }
  }

  async updateMedecin(req, res) {
    try {
      const medecin = await Medecin.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!medecin) {
        res.status(404).json({ message: 'Médecin non trouvé' });
      } else {
        res.json(medecin);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du médecin' });
    }
  }

  async deleteMedecin(req, res) {
    try {
      await Medecin.findByIdAndRemove(req.params.id);
      res.json({ message: 'Médecin supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression du médecin' });
    }
  }
}

//controller patient

import { Patient } from '../models/patient.js';

export class PatientsController {
  async getAllPatients(req, res) {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des patients' });
    }
  }

  async getPatientById(req, res) {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        res.status(404).json({ message: 'Patient non trouvé' });
      } else {
        res.json(patient);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération du patient' });
    }
  }

  async createPatient(req, res) {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.json(patient);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création du patient' });
    }
  }

  async updatePatient(req, res) {
    try {
      const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!patient) {
        res.status(404).json({ message: 'Patient non trouvé' });
      } else {
        res.json(patient);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du patient' });
    }
  }

  async deletePatient(req, res) {
    try {
      await Patient.findByIdAndRemove(req.params.id);
      res.json({ message: 'Patient supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression du patient' });
    }
  }
}



//controller service
import { Service } from '../models/service.js';

export class ServicesController {
  async getAllServices(req, res) {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des services' });
    }
  }

  async getServiceById(req, res) {
    try {
      const service = await Service.findById(req.params.id);
      if (!service) {
        res.status(404).json({ message: 'Service non trouvé' });
      } else {
        res.json(service);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération du service' });
    }
  }

  async createService(req, res) {
    try {
      const service = new Service(req.body);
      await service.save();
      res.json(service);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la création du service' });
    }
  }

  async updateService(req, res) {
    try {
      const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!service) {
        res.status(404).json({ message: 'Service non trouvé' });
      } else {
        res.json(service);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du service' });
    }
  }

  async deleteService(req, res) {
    try {
      await Service.findByIdAndRemove(req.params.id);
      res.json({ message: 'Service supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression du service' });
    }
  }
}