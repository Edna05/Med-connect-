
 
  export class service {
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