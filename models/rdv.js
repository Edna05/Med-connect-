export class rdv {
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