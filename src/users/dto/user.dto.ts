import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    role: 'user' | 'admin';
}
