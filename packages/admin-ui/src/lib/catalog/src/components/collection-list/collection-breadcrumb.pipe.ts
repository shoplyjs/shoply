import { Pipe, PipeTransform } from '@angular/core';
import { GetCollectionListQuery, ItemOf } from '@shoplyjs/admin-ui/core';

/**
 * Removes the root collection and self breadcrumb from the collection breadcrumb list.
 */
@Pipe({
    name: 'collectionBreadcrumb',
})
export class CollectionBreadcrumbPipe implements PipeTransform {
    transform(value: ItemOf<GetCollectionListQuery, 'collections'>): unknown {
        return value?.breadcrumbs.slice(1, -1);
    }
}
