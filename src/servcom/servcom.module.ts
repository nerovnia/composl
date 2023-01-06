import { Module } from '@nestjs/common';
import { ServcomController } from './servcom.controller';

@Module({
  controllers: [ServcomController]
})
export class ServcomModule {}
