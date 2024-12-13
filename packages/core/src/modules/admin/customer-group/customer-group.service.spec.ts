import { Test, TestingModule } from '@nestjs/testing';
import { CustomerGroupService } from './customer-group.service';

describe('CustomerGroupService', () => {
    let service: CustomerGroupService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CustomerGroupService],
        }).compile();

        service = module.get<CustomerGroupService>(CustomerGroupService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
