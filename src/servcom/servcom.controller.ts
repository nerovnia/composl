import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindServcomDto } from './dto/find-servcom.dto';
import { ServcomModel } from './servcom.model/servcom.model';

@Controller('servcom')
export class ServcomController {
  @Post('create')
  async create(@Body() dto: Omit<ServcomModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ServcomModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindServcomDto) {
    
  }  
}
