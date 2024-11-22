import { Controller, Get } from '@nestjs/common';
import { Permission } from '@shoplyjs/common/lib/generated-shop-types';
import { Allow, InternalServerError, VendurePlugin } from '@shoplyjs/core';

@Controller('test')
export class TestController {
    @Get('public')
    publicRoute() {
        return 'success';
    }

    @Allow(Permission.Authenticated)
    @Get('restricted')
    restrictedRoute() {
        return 'success';
    }

    @Get('bad')
    badRoute() {
        throw new InternalServerError('uh oh!');
    }
}

@VendurePlugin({
    controllers: [TestController],
})
export class TestRestPlugin {}
