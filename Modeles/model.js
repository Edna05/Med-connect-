// models.js
export class Administrateur {
    id;
    nom;
    prenom;
    email;
    telephone;
    idHopital;
    idGestionnaire;
  
    constructor(data) {
      this.id = data.id;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.email = data.email;
      this.telephone = data.telephone;
      this.idHopital = data.idHopital;
      this.idGestionnaire = data.idGestionnaire;
    }
  }
  
  export class RendezVous {
    id;
    date;
    heure;
    idMedecin;
    idPatient;
  
    constructor(data) {
      this.id = data.id;
      this.date = data.date;
      this.heure = data.heure;
      this.idMedecin = data.idMedecin;
      this.idPatient = data.idPatient;
    }
  }
  
  export class Gestionnaire {
    id;
    nom;
    prenom;
    nomService;
  
    constructor(data) {
      this.id = data.id;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.nomService = data.nomService;
    }
  }
  
  export class Hopital {
    id;
    nom;
    addresse;
    ville;
    telephone;
  
    constructor(data) {
      this.id = data.id;
      this.nom = data.nom;
      this.addresse = data.addresse;
      this.ville = data.ville;
      this.telephone = data.telephone;
    }
  }
  
  export class Medecin {
    id;
    nom;
    prenom;
    specialite;
    telephone;
    email;
  
    constructor(data) {
      this.id = data.id;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.specialite = data.specialite;
      this.telephone = data.telephone;
      this.email = data.email;
    }
  }
  
  export class Patient {
    id;
    nom;
    prenom;
    addresse;
    ville;
    telephone;
    email;
    assure;
  
    constructor(data) {
      this.id = data.id;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.addresse = data.addresse;
      this.ville = data.ville;
      this.telephone = data.telephone;
      this.email = data.email;
      this.assure = data.assure;
    }
  }
  
  export class Service {
    id;
    nom;
    telephone;
    email;
  
    constructor(data) {
      this.id = data.id;
      this.nom = data.nom;
      this.telephone = data.telephone;
      this.email = data.email;
    }
  }