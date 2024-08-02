
 
  export class medecin {
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
  