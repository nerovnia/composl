import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CompanyModel } from './company.model/company.model';
import { FindCompanyDto } from './dto/find-company.dto';

@Controller('company')
export class CompanyController {
  @Post('create')
  async create(@Body() dto: Omit<CompanyModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CompanyModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindCompanyDto) {
    
  }  
}
