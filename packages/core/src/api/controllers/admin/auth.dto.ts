import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginDto {
    @ApiProperty({ required: true, default: 'superadmin', example: 'superadmin' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ required: true, default: 'superadmin', example: 'superadmin' })
    @IsNotEmpty()
    password: string;
}
