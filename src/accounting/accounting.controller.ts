import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { AccountingModel } from './accounting.model/accounting.model';
import { FindAccountingDto } from './dto/find-accounting.dto';

@Controller('accounting')
export class AccountingController {

  @Post('create')
  async create(@Body() dto: Omit<AccountingModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: AccountingModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindAccountingDto) {
    
  }

}
