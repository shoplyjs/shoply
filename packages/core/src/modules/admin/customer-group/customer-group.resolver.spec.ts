import { Test, TestingModule } from '@nestjs/testing';
import { CustomerGroupResolver } from './customer-group.resolver';

describe('CustomerGroupResolver', () => {
    let resolver: CustomerGroupResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CustomerGroupResolver],
        }).compile();

        resolver = module.get<CustomerGroupResolver>(CustomerGroupResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
