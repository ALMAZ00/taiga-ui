import {ComponentRef, EmbeddedViewRef, Injectable, TemplateRef} from '@angular/core';
import {TuiNoHostException} from '@taiga-ui/cdk/exceptions';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {AbstractTuiPortalHostComponent} from './portal-host';

/**
 * Abstract service for displaying portals
 */
@Injectable()
export abstract class AbstractTuiPortalService {
    protected host?: AbstractTuiPortalHostComponent;

    protected get safeHost(): AbstractTuiPortalHostComponent {
        if (!this.host) {
            throw new TuiNoHostException();
        }

        return this.host;
    }

    attach(host: AbstractTuiPortalHostComponent): void {
        this.host = host;
    }

    add<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        return this.safeHost.addComponentChild(component);
    }

    remove<C>({hostView}: ComponentRef<C>): void {
        if (!hostView.destroyed) {
            hostView.destroy();
        }
    }

    addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.safeHost.addTemplateChild(templateRef, context);
    }

    removeTemplate<C>(viewRef: EmbeddedViewRef<C>): void {
        if (!viewRef.destroyed) {
            viewRef.destroy();
        }
    }
}
