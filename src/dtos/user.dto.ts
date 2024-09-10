import { IsEmail, IsString } from "class-validator";

export class UserDTO {
    @IsString()
    userId: string;
    
    @IsString()
    firstName: string;
    
    @IsString()
    lastName: string;
}