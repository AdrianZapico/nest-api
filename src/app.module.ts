import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// eslint-disable-next-line prettier/prettier

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'docker',
    database:'postgres',
    autoloadEntities:true,
    syncrhonize: true,


  })],
  controllers: [AppController],
  // eslint-disable-next-line prettier/prettier
  providers: [AppService],
})
export class AppModule {}
