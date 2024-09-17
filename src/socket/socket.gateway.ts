
import { Server, Socket } from 'socket.io';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
@WebSocketGateway()
export class SocketGateway {
  constructor(){}
  
  @WebSocketServer()
  server: Server;

  onModualInit(){
    this.server.on("connection",(socket)=>{
      console.log('hiii ',socket);
    })
  }
  @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): string {
      console.log('Message received:', message);
      return 'Message received: ' + message;
    }
  
    @SubscribeMessage('broadcast')
    handleBroadcast(@MessageBody() data: any, client: Socket): void {
      console.log('broadcast Message received:', data);

      this.server.emit('broadcast', data);
    }


    @SubscribeMessage('offer')
    handleOffer(@MessageBody() data: any, client: Socket): void {
      console.log('broadcast Message received:', data);

      this.server.emit('offer', data);
    }


    @SubscribeMessage('answer')
    handleAnswer(@MessageBody() data: any, client: Socket): void {
      console.log('broadcast Message received:', data);

      this.server.emit('answer', data);
    }


    @SubscribeMessage('ice-candidate')
    handleIceCandidate(@MessageBody() data:any, client: Socket): void {
      console.log('broadcast Message received:', data);

      this.server.emit('ice-candidate', data);
    }


    
  
}
