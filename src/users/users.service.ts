import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return this.usersRepository.findOne({where: {id: parseInt(id)}});
    }

    async findOneByUsername(username: string): Promise<User> {
        return this.usersRepository.findOne({where: {username}});
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async create(user: User): Promise<User> {
        return this.usersRepository.save(user);
    }

    async update(id: string, user: User): Promise<User> {
        await this.usersRepository.update(id, user);
        return this.usersRepository.findOne({where: {id: parseInt(id)}});
    }
}
