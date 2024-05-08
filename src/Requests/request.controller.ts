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
import { RequestService } from './request.service';
import { Req_Type } from './dao/requests.entity';
import { Cli_Type } from './dao/requests.entity';
@Controller('requests')
export class RequestController {
  constructor(private readonly requetssService: RequestService) {}

  @Post()
  addRequest(
    @Body('type') ReqType: Req_Type,
    @Body('IdClient') clientId: number,
    @Body(' client_Type:') client_Type: Cli_Type,
    @Body('date') ReqDate: Date,
  ) {
    try {
      const generatedId = this.requetssService.createRequest(
        ReqType,
        clientId,
        client_Type,
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
      const requests = this.requetssService.showMyRequests(cliId);
      return requests;
    } catch (error) {
      throw new HttpException(
        'Error retrieving client requests',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @Get('request/:idRequest')
  // async getRequest(@Param('idRequest') reqId: number) {
  //   try {
  //     const request = this.requetssService.showRequestsByNumR(reqId);
  //     return request;
  //   } catch (error) {
  //     throw new HttpException(
  //       'Error retrieving request',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  @Delete(':idRequest')
  async cancelRequest(@Param('idRequest') reqId: number) {
    try {
      this.requetssService.endTheRequest(reqId);
      return null;
    } catch (error) {
      throw new HttpException(
        'Error canceling request',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
