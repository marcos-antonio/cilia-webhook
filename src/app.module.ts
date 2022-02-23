import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiliaModule } from './modules/cilia/cilia.module';

@Module({
  imports: [CiliaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
