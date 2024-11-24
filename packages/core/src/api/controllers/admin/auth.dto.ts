import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
    @ApiProperty({ required: true, default: 'superadmin', example: 'superadmin' })
    @IsEmail()
    emailAddress: string;

    @ApiProperty({ required: true, default: 'superadmin', example: 'superadmin' })
    @IsNotEmpty()
    password: string;
}
