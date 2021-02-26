import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    readonly _id: number;

    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly rol: string;
    
    @ApiProperty()
    readonly imageProfile: string;

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;
}