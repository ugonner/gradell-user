import { Repository } from "typeorm";
import { User } from "../entity/User.entity";
import { AppDataSource } from "../data-source";
import { UserDTO } from "../dtos/user.dto";
import { AppError } from "../utils/extensions/app-error.ext";
import { HttpStatus } from "../utils/enums/httpstatus.enum";

export class UserService {
    private userRepository: Repository<User> = AppDataSource.manager.getRepository(User);
    async createUser(dto: UserDTO): Promise<User> {
        const userExists = await this.userRepository.findOneBy({
            userId: dto.userId
        })
        if(userExists) throw new AppError("User with same ID already exists", HttpStatus.BAD_REQUEST, this.createUser.name);
        const user = this.userRepository.create(dto);
        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    
}