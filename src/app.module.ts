import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { AccountingModule } from './accounting/accounting.module';
import { CompanyModule } from './company/company.module';
import { ServcomModule } from './servcom/servcom.module';
import { ServpayModule } from './servpay/servpay.module';

@Module({
  imports: [AuthModule, TopPageModule, AccountingModule, CompanyModule, ServcomModule, ServpayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
