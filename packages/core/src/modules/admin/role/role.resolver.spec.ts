import { Test, TestingModule } from '@nestjs/testing';
import { RoleResolver } from './role.resolver';

describe('RoleResolver', () => {
    let resolver: RoleResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RoleResolver],
        }).compile();

        resolver = module.get<RoleResolver>(RoleResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
