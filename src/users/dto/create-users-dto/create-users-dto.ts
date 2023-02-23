import { IsString, IsInt } from "class-validator";

export class CreateUsersDto {
   @IsString()
   readonly name: string;
   @IsInt()
   readonly idade: number;
   @IsString({each:true})
   readonly skills: string[];
}

