import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dialog } from '@shoplyjs/admin-ui/core';

@Component({
    selector: 'vdr-order-state-select-dialog',
    templateUrl: './order-state-select-dialog.component.html',
    styleUrls: ['./order-state-select-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderStateSelectDialogComponent implements Dialog<string> {
    resolveWith: (result?: string) => void;
    nextStates: string[] = [];
    message = '';
    cancellable: boolean;
    selectedState = '';

    select() {
        if (this.selectedState) {
            this.resolveWith(this.selectedState);
        }
    }

    cancel() {
        this.resolveWith();
    }
}
