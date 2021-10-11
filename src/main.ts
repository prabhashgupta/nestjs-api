import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('nest-js New APIs')
    .setDescription('New generation of nest-js APIs')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document);
  await app.listen(3000, () => {
    console.log("Nest API running at http://localhost:3000");
  });
}
bootstrap();
