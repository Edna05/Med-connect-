export class gestionnaire {
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
  