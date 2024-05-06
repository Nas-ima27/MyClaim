export class Client {
  id: number;
  nom: string;
  prenom: string;
  tel: string;

  constructor(id: number, nom: string, prenom: string, tel: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
  }
}
