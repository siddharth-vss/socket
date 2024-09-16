import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketController } from './socket/socket.controller';
import { SocketGateway } from './socket/socket.gateway';

@Module({
  controllers: [AppController, SocketController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
