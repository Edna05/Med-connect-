

export class patient {
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
  