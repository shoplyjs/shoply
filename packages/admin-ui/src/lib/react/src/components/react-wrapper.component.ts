import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
    selector: 'vdr-react-wrapper',
    template: `<div #reactContainer></div>`,
})
export class ReactWrapperComponent implements AfterViewInit {
    @ViewChild('reactContainer', { read: ViewContainerRef, static: true })
    reactContainer!: ViewContainerRef;

    async ngAfterViewInit() {
        const { default: Counter } = await loadRemoteModule({
            remoteName: 'reactApp',
            remoteEntry: 'http://localhost:8081/remoteEntry.js',
            exposedModule: './Counter',
        });

        const reactElement = React.createElement(Counter);

        const container = this.reactContainer.element.nativeElement;
        const root = ReactDOM.createRoot(container);
        root.render(reactElement); // Render using 'createRoot'
    }
}
