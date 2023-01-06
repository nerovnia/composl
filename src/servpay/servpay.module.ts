import { Module } from '@nestjs/common';
import { ServpayController } from './servpay.controller';

@Module({
  controllers: [ServpayController]
})
export class ServpayModule {}
