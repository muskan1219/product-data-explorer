import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
async function bootstrap(){
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
  console.log('Backend listening on http://localhost:4000');
}
bootstrap();
