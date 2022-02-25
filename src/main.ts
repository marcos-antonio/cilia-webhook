import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('API de teste de Webhook da Cilia')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const redocOptions: RedocOptions = {
    title: 'Darwin  Cilia Webhook',
    noAutoAuth: true,
    sortPropsAlphabetically: true,
    hideDownloadButton: true,
    hideHostname: false,
  };
  await RedocModule.setup('/docs', app, document, redocOptions);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
