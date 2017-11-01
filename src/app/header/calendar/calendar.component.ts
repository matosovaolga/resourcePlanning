import {
    Component,
    OnChanges,
    Input,
    ElementRef,
    ViewChild, EventEmitter, Output,
} from '@angular/core';
import {formatDateByParam} from '../calendar/utils/date.util';
import {IDateObject} from './utils/date-object.interface';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarDateShareService} from '../../shared/services/calendar-date-share.service';
import {ICurrentDate} from '../../shared/interfaces/currentDate.interface';
import {EnumMonthItems} from '../../shared/interfaces/dateConfig.interface';
import {IMyDateRangeModel} from 'mydaterangepicker';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
/** Class CalendarComponent. */
export class CalendarComponent implements OnChanges {

    /** List week days. */
    public weekDays: string[] = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    /** Width date field. */
    public daysWidth: number;
    @Output() onChanged = new EventEmitter();
    /** Get date config object from UserComponent. */
    @Input() dateConfig: IDateObject;

    /** Generate event if width was changed */
    @Output() widthDays = new EventEmitter();

    /** Calendar line. */
    @ViewChild('calLineMain')
    calLineMain: ElementRef;

    /** Current date (Start, End). */
    public currentDate: ICurrentDate;
    /**
     * Create CalendarComponent.
     * @param elementRef - DOM
     * @param dataShare - The service for calendar date share.
     * */
    constructor(
        private elementRef: ElementRef,
        private dataShare: CalendarDateShareService,
        public calendarShare: CalendarDateShareService
    ) {}

    /**
     * If date config was changed ->
     * take calendar line width and emmit new event.
     * */
    ngOnChanges(e) {
        this.getWidth();
        this.widthDays.emit(this.daysWidth);
    }

    /** Calculate date width. */
    getWidth(): void {
        /** Month array have view like this [firstMonth, ...Month]. */
        const size = Object.keys(this.dateConfig).length;
        let countDays = 0;
        for (let i = 0; i < size; i++) {
            countDays += this.dateConfig[i].daysRange.length
        }
        /** 70 - Offset for the side shooters. */
        this.daysWidth = (this.calLineMain.nativeElement.offsetWidth - 70) / countDays;

        /** Update field width Rx.JS. */
        this.dataShare.setFieldWidth(this.daysWidth);
    };

    getNewDate(old, type, step) {
        return formatDateByParam(moment(old, 'YYYY-MM-D').add(step, type), 'DD.MM.YYYY', 'X');
    }

    changeDateRange(direction, type): void {

        const startOld = formatDateByParam(LocalStorageService.getCurrentDate().start, 'YYYY-MM-DD');
        const endOld = formatDateByParam(LocalStorageService.getCurrentDate().end, 'YYYY-MM-DD');

        let start,
            end;

        if (direction == 'next') {
            if (type == "month") {
                start = this.getNewDate(startOld, 'month', 1);
                end = this.getNewDate(endOld, 'month', 1);
            } else {
                start = this.getNewDate(startOld, 'day', 1);
                end = this.getNewDate(endOld, 'day', 1);

            }
        } else if (direction == 'prev') {
            if (type == "month") {
                start = formatDateByParam(moment(startOld, 'YYYY-MM-D').add(-1, 'month'), 'DD.MM.YYYY', 'X');
                end = formatDateByParam(moment(endOld, 'YYYY-MM-D').add(-1, 'month'), 'DD.MM.YYYY', 'X');

            } else {
                start = formatDateByParam(moment(startOld, 'YYYY-MM-D').add(-1, 'day'), 'DD.MM.YYYY', 'X');
                end = formatDateByParam(moment(endOld, 'YYYY-MM-D').add(-1, 'day'), 'DD.MM.YYYY', 'X');
            }
        }

        /** Get month days range. */
        this.dateConfig = CalendarService.dateChange({start, end});
        this.onChanged.emit({start, end});
        LocalStorageService.setDateConfig(this.dateConfig);
        LocalStorageService.setCurrentDate({start, end});

        //        /** Update date Rx.JS. */
        this.calendarShare.setDatePeriod({start, end});
    }
}
