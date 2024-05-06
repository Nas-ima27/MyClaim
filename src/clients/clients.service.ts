import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './clients.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ClientsService {
  private clients: Client[] = [];
  insertClient(nom: string, prenom: string, tel: string) {
    const cliId = uuidv4();
    const newClient = new Client(cliId, nom, prenom, tel);
    this.clients.push(newClient);
    return cliId;
  }
  getClients() {
    return [...this.clients];
  }
  getSingleClient(clientId: number) {
    const client = this.findClient(clientId)[0];
    return { ...client };
  }
  updateClient(
    clientId: number,
    clientNom: string,
    clientPrenom: string,
    clientTel: string,
  ) {
    const [client, index] = this.findClient(clientId);
    const updatedClient = { ...client };
    if (clientNom) {
      updatedClient.nom = clientNom;
    }
    if (clientPrenom) {
      updatedClient.nom = clientPrenom;
    }
    if (clientTel) {
      updatedClient.nom = clientTel;
    }
    this.clients[index] = updatedClient;
  }

  private findClient(id: number): [Client, number] {
    const clientIndex = this.clients.findIndex((cli) => cli.id === id);
    const client = this.clients[clientIndex];
    if (!client) {
      throw new NotFoundException('could not find client.');
    }
    return [client, clientIndex];
  }
  deleteClient(cliId: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, index] = this.findClient(cliId);
    this.clients.splice(index, 1);
  }
}
