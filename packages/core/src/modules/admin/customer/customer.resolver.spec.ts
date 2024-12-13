import { Test, TestingModule } from '@nestjs/testing';
import { CustomerResolver } from './customer.resolver';

describe('CustomerResolver', () => {
    let resolver: CustomerResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CustomerResolver],
        }).compile();

        resolver = module.get<CustomerResolver>(CustomerResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
