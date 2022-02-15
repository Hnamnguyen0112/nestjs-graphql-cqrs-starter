import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const appPrefix = `${process.env.APP_VERSION}`;
  app.setGlobalPrefix(appPrefix);
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
