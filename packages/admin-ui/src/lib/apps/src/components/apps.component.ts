import { Component, OnInit } from '@angular/core';
import { DataService, titleSetter } from '@shoplyjs/admin-ui/core';

@Component({
    selector: 'vdr-app',
    templateUrl: './apps.component.html',
})
export class AppsComponent implements OnInit {
    private setTitle = titleSetter();
    private _document?: Document;
    constructor(private dataService: DataService) {
        this._document = document;
        // empty
    }

    ngOnInit() {
        this.setTitle('breadcrumb.apps');
    }
}
