// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users-dto/create-users-dto';
import { UpdateUsersDto } from './dto/update-users-dto/update-users-dto';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';


@Controller('users')
export class UsersController {
  constructor(private readonly userService : UsersService){}
  @Get()
  findALL() {
    return this.userService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
   const users = this.userService.findOne(id)
   if(!users){
    throw new HttpException(`user # ${id} not found`,
    HttpStatus.NOT_FOUND)
   }
  }
  @Post()
  create(@Body()createUsersDto: CreateUsersDto ) {
    return this.userService.create(createUsersDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUsersDto){
    return this.userService.update(id,updateUserDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string, @Body() body){
    return this.userService.remove(id);
  }
}
