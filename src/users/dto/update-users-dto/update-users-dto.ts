import { PartialType } from "@nestjs/mapped-types";
import { CreateUsersDto } from "../create-users-dto/create-users-dto";

export class UpdateUsersDto extends PartialType(CreateUsersDto) {
    name?: string;
    idade?: number;
    skills?: string[];
}
