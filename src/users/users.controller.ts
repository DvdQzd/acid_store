import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { UserDto } from './dto/user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
@ApiBearerAuth('JWT')
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    @Roles('admin')
    update(@Param('id') id: string, @Body() user: UserDto): Promise<User> {
        return this.usersService.update(id, user);
    }

    @Post()
    @Roles('admin')
    create(@Body() user: UserDto): Promise<User> {
        return this.usersService.create(user);
    }

    @Delete(':id')
    @Roles('admin')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}