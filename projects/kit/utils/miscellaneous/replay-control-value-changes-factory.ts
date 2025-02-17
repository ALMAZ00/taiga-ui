import {NgControl} from '@angular/forms';
import {
    tuiControlValue,
    TuiControlValueTransformer,
    TuiDay,
    TuiDayRange,
    TuiTime,
} from '@taiga-ui/cdk';
import {map, Observable, of} from 'rxjs';

/**
 * @internal
 */
export function tuiControlValueFactory<
    T extends TuiDay | TuiDayRange | [TuiDay | null, TuiTime | null],
>(
    control: NgControl | null,
    valueTransformer?: TuiControlValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? tuiControlValue(control).pipe(
              map(value =>
                  valueTransformer
                      ? valueTransformer.fromControlValue(value)
                      : (value as T),
              ),
          )
        : of(null);
}
