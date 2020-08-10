import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Throw an exception for non-whitelisted properties
      forbidNonWhitelisted: true,
      // Strip the validated object of properties that don't use validation decorators
      whitelist: true,
    })
  );

  await app.listen(3000);
}

bootstrap();
