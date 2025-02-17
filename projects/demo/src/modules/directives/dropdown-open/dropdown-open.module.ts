import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownOpenComponent} from './dropdown-open.component';
import {TuiDropdownOpenExample1} from './examples/1';
import {TuiDropdownOpenExample2} from './examples/2';
import {TuiDropdownOpenExample3} from './examples/3';
import {TuiDropdownOpenExample4} from './examples/4';
import {TuiDropdownOpenExample5} from './examples/5';
import {TopRightDirective} from './examples/5/accessor';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TuiInputModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiSelectModule,
        TuiActiveZoneModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiDropdownModule,
        TuiMultiSelectModule,
        DropdownDocumentationModule,
        tuiGetDocModules(ExampleTuiDropdownOpenComponent),
    ],
    declarations: [
        TuiDropdownOpenExample1,
        TuiDropdownOpenExample2,
        TuiDropdownOpenExample3,
        TuiDropdownOpenExample4,
        TuiDropdownOpenExample5,
        TopRightDirective,
        ExampleTuiDropdownOpenComponent,
    ],
    exports: [ExampleTuiDropdownOpenComponent],
})
export class ExampleTuiDropdownOpenModule {}
