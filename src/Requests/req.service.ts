import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Request } from './req.model';
import { Enumerator } from './req.model';

@Injectable()
export class ReqService {
  private requests: Request[] = [];
  filter: any;
  createRequest(clientId: number, ReqType: Enumerator, ReqDate: Date) {
    const ReqNumber = uuidv4();
    const newRequest = new Request(ReqNumber, clientId, ReqType, ReqDate);
    this.requests.push(newRequest);

    return ReqNumber;
  }
  showRequestsByNumR(reqId: number) {
    const request = this.findRequestById(reqId);
    return { ...request };
  }
  showMyRequests(clientId: number) {
    const request = this.findRequestByclient(clientId);
    return [...request];
  }
  endTheRequest(reqId: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [request, requestIndex] = this.findRequestById(reqId);
    this.requests.splice(requestIndex, 1);
  }

  private findRequestById(id: number): [Request, number] {
    const requestIndex = this.requests.findIndex((req) => req.ReqId === id);
    const request = this.requests[requestIndex];
    if (requestIndex === -1) {
      throw new NotFoundException('Could not find request');
    }
    return [request, requestIndex];
  }

  private findRequestByclient(id: number): Request[] {
    const requests = this.filter.findIndex((req) => req.ClientId === id);
    if (requests.length === 0) {
      throw new NotFoundException('could not find requests');
    }
    return requests;
  }
}
