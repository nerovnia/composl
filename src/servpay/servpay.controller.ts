import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindServpayDto } from './dto/find-servpay.dto';
import { ServpayModel } from './servpay.model/servpay.model';

@Controller('servpay')
export class ServpayController {
  @Post('create')
  async create(@Body() dto: Omit<ServpayModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ServpayModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindServpayDto) {
    
  }  
}
