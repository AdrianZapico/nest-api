/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Users } from './entities/users.entity'


@Injectable()
export class UsersService {
    private users: Users[] = [
        {
            id: 1,
            name: "Adrian",
            idade: 28,
            skills: ['react, node, css, etc...'],
        },
    ];

    findAll() {
        return this.users;
    }
    findOne(id: string) {
        const user = this.users.find((users: Users) => users.id === Number(id));

        if(!user){
            throw new HttpException(`User id ${id} not found`,
            HttpStatus.NOT_FOUND);
        }
       return user
    }

    create(createUserDto: any) {
        this.users.push(createUserDto);
    }

    update(id: string, updateUserDto: any) {
        const indexUser = this.users.findIndex(
            (users: Users) => users.id === Number(id),
        );
        this.users[indexUser] = updateUserDto
    }

    remove(id: string) {
        const indexUser = this.users.findIndex(
            (users: Users) => users.id === Number(id),
        );
        if (indexUser >= 0) {
            this.users.splice(indexUser, 1)
        }

    }

}
