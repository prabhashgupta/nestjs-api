import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

class UserAuthDto {
    @ApiProperty()
    userName: string;
    @ApiProperty()
    password: string;
}

@ApiTags('Infra')
@Controller('infra/auth')
export class AuthController {

    @ApiCreatedResponse({type: UserAuthDto})
    @Post('login')
    public login(@Body() body: UserAuthDto): UserAuthDto {
        return body;
    }
}