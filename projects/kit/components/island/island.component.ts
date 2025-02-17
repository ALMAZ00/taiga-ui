import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-island, a[tuiIsland]',
    templateUrl: './island.template.html',
    styleUrls: ['./island.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-island',
    },
})
export class TuiIslandComponent {
    @Input()
    size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    textAlign: 'center' | 'left' | 'right' = 'left';

    @Input()
    @HostBinding('class.tui-island_hoverable')
    hoverable = false;

    @Input()
    @HostBinding('class.tui-island_transparent')
    transparent = false;

    @HostBinding('class.tui-island_size_s')
    get sizeS(): boolean {
        return this.size === 's';
    }

    @HostBinding('class.tui-island_size_m')
    get sizeM(): boolean {
        return this.size === 'm';
    }

    @HostBinding('class.tui-island_size_l')
    get sizeL(): boolean {
        return this.size === 'l';
    }

    @HostBinding('class.tui-island_text-align_left')
    get textAlignLeft(): boolean {
        return this.textAlign === 'left';
    }

    @HostBinding('class.tui-island_text-align_center')
    get textAlignCenter(): boolean {
        return this.textAlign === 'center';
    }

    @HostBinding('class.tui-island_text-align_right')
    get textAlignRight(): boolean {
        return this.textAlign === 'right';
    }
}
