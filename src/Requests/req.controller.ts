import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ReqService } from './req.service';
import { Enumerator } from './req.model';

@Controller('requests')
export class ReqController {
  constructor(private readonly reqssService: ReqService) {}

  @Post()
  addRequest(
    @Body('IdClient') clientId: number,
    @Body('type') ReqType: Enumerator,
    @Body('date') ReqDate: Date,
  ) {
    try {
      const generatedId = this.reqssService.createRequest(
        clientId,
        ReqType,
        ReqDate,
      );
      return { id: generatedId };
    } catch (error) {
      throw new HttpException(
        'Error adding request',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('client/:idClient')
  async getMyRequests(@Param('idClient') cliId: number) {
    try {
      const requests = this.reqssService.showMyRequests(cliId);
      return requests;
    } catch (error) {
      throw new HttpException(
        'Error retrieving client requests',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('request/:idRequest')
  async getRequest(@Param('idRequest') reqId: number) {
    try {
      const request = this.reqssService.showRequestsByNumR(reqId);
      return request;
    } catch (error) {
      throw new HttpException(
        'Error retrieving request',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':idRequest')
  async cancelRequest(@Param('idRequest') reqId: number) {
    try {
      this.reqssService.endTheRequest(reqId);
      return null;
    } catch (error) {
      throw new HttpException(
        'Error canceling request',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
