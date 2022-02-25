import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Budget } from './modules/cilia/budget/model/budget.entity';
import { CiliaModule } from './modules/cilia/cilia.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const connectionString = configService.get('DATABASE_URL');
        const [userPass, ipPortDb] = connectionString.slice(11).split('@');
        const [user, pass] = userPass.split(':');
        const [ip, portDb] = ipPortDb.split(':');
        const [port, db] = portDb.split('/');
        return {
          type: 'postgres' as any,
          host: ip,
          port: port,
          username: user,
          password: pass,
          database: db,
          entities: [Budget],
          synchronize: true,
          ssl: true,
        };
      },
    }),
    CiliaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
