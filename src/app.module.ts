import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('Middleware setup start!');
    consumer.apply(function (req, res, next) { 
      console.log('Middleware called!')
      next();
    }).forRoutes(AppController)
  }

}