import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(id: number): Promise<import("./user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
    remove(id: number): Promise<void>;
}
