import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorFragment, BaseEntityResolver, DataService } from '@shoplyjs/admin-ui/core';

@Injectable({
    providedIn: 'root',
})
export class ProfileResolver extends BaseEntityResolver<AdministratorFragment> {
    constructor(router: Router, dataService: DataService) {
        super(
            router,
            {
                __typename: 'Administrator' as const,
                id: '',
                createdAt: '',
                updatedAt: '',
                emailAddress: '',
                firstName: '',
                lastName: '',
                user: { roles: [] } as any,
            },
            id =>
                dataService.administrator
                    .getActiveAdministrator()
                    .mapStream(data => data.activeAdministrator),
        );
    }
}
