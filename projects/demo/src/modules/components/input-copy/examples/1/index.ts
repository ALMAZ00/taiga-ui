import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-copy-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputCopyExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
    });
}
