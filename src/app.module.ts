import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Budget } from './modules/cilia/budget/model/budget.entity';
import { CiliaModule } from './modules/cilia/cilia.module';
import { Invoice } from './modules/cilia/invoice/model/invoice.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const connectionString = configService.get('DATABASE_URL');
        return {
          type: 'postgres' as any,
          url: connectionString,
          entities: [Budget, Invoice],
          synchronize: true,
          ssl: true,
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
        };
      },
    }),
    CiliaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
