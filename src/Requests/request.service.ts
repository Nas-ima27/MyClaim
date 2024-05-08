import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Request } from '../entities/requests.entity';
import { Req_Type } from './dao/requests.entity';
import { Cli_Type } from './dao/requests.entity';
// import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor() {}
  //@InjectRepository(Request)
  // private readonly requestRepository: Repository<Request>,
  async createRequest(
    reqType: Req_Type,
    clientId: number,
    clientType: Cli_Type,
    date: Date,
  ): Promise<number> {
    console.log({ reqType, clientId, clientType, date });
    // const newRequest = this.requestRepository.create({
    //   reqType,
    //   clientId,
    //   clientType,
    //   date,
    // });
    // const requestIn = await this.requestRepository.save(newRequest);
    return null;
    // requestIn.reqId;
  }
  // async showRequestByNumR(reqId: number): Promise<Request> {
  //   try {
  //     return await this.requestRepository.findOneOrFail(reqId);
  //   } catch (error) {
  //     throw new NotFoundException('Request not found');
  //   }
  // }
  async showMyRequests(clientId: number): Promise<Request[]> {
    console.log({ clientId });
    return null;
    // this.requestRepository.find({ where: { clientId } });
  }
  async endTheRequest(reqId: number): Promise<void> {
    console.log({ reqId });

    // await this.requestRepository.delete(reqId);
  }
  // private findRequestById(id: number): [Request, number] {
  //   const requestIndex = this.requests.findIndex((req) => req.ReqId === id);
  //   const request = this.requests[requestIndex];
  //   if (requestIndex === -1) {
  //     throw new NotFoundException('Could not find request');
  //   }
  //   return [request, requestIndex];
  // }
  // private findRequestByclient(id: number): Request[] {
  //   const requests = this.filter.findIndex((req) => req.ClientId === id);
  //   if (requests.length === 0) {
  //     throw new NotFoundException('could not find requests');
  //   }
  //   return requests;
  // }
}
