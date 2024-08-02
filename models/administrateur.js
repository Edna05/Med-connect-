

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