import {Component, Input, OnInit} from '@angular/core';
import {dateFormat} from '../header/calendar/utils/date.util';
import {CalendarDateShareService} from '../shared/services/calendar-date-share.service';
import * as moment from 'moment';

@Component({
    selector: 'app-cursors',
    templateUrl: './cursors.component.html'
})
export class CursorsComponent implements OnInit {
    @Input() mouseCursor: number;
    @Input() leave: boolean;

    private nowDayCursorPosition: number;

    constructor(
        public calendarShare: CalendarDateShareService,
    ) {}

    ngOnInit() {
        this.getNowDayCursorPosition();
    }

    /** Change now day cursor line position. */
    getNowDayCursorPosition(): void {

        const today = moment();

        function getHoursOffset(width: number): number {
            return Number(moment().format('H')) * (width / 24);
        }

        this.calendarShare.getDatePeriod().subscribe((r) => {
            if (!r) {return }
            const start = moment(r.date.start, dateFormat);
            const end = moment(r.date.end, dateFormat);

            if (start.isBefore(today) && today.isBefore(end)) {
                const diff = start.diff(today, 'days') * -1;
                this.calendarShare.getFieldWidth().subscribe((width) => {
                    this.nowDayCursorPosition = 300 + diff * width + getHoursOffset(width);
                })
            }
        });
    }
}
