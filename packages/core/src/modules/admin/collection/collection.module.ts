import { Module } from '@nestjs/common';
import { CollectionResolver } from './collection.resolver';
import { CollectionService } from './collection.service';

@Module({
    providers: [CollectionResolver, CollectionService],
})
export class CollectionModule {}
