import {Component, Input} from '@angular/core';

@Component({
    selector: 'button-component',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    @Input() borderColor: string;
    @Input() backgroundColor: string;
}
