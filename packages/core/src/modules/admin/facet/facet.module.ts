import { Module } from '@nestjs/common';
import { FacetResolver } from './facet.resolver';
import { FacetService } from './facet.service';

@Module({
    providers: [FacetResolver, FacetService],
})
export class FacetModule {}
