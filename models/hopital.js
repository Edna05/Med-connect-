

export class hopital {
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
  