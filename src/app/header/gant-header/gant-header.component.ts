import {Component, forwardRef, OnInit} from '@angular/core';
import {IMyDateRangeModel, IMyDrpOptions} from 'mydaterangepicker';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarDateShareService} from '../../shared/services/calendar-date-share.service';
import {formatDateByParam} from '../calendar/utils/date.util';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {ICurrentDate} from '../../shared/interfaces/currentDate.interface';
import {EnumMonthItems} from '../../shared/interfaces/dateConfig.interface';

@Component({
    selector: 'app-gant-header',
    templateUrl: './gant-header.component.html',
    providers: [forwardRef(() => CalendarService)]
})
/**
 * The class GantHeaderComponent.
 * */
export class GantHeaderComponent implements OnInit {

    /** Config object for Date. */
    public dateConfig: EnumMonthItems;
    /** Current date (Start, End). */
    public currentDate: ICurrentDate;
    public sticky: boolean = false;
    
    private dateRange: Object;
    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd mmm yyyy',
        monthLabels: {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}
    };

    /**
     * Create GantHeaderComponent.
     * @param calendarShare - Share calendar data
     * */
    constructor(
        public calendarShare: CalendarDateShareService
    ) {}

    ngOnInit() {
        if (!LocalStorageService.checkInit()) {
            CalendarService.init();
        }
        let scope = this;
        this.dateConfig = LocalStorageService.getDateConfig();
        this.currentDate = LocalStorageService.getCurrentDate();

        let curentEnd = this.currentDate.end.split('.');
        let curentStart = this.currentDate.start.split('.');

        this.dateRange = {
            beginDate: {
                year: curentStart[2],
                month: Number(curentStart[1]),
                day: Number(curentStart[0])
            },
            endDate: {
                year: curentEnd[2],
                month: Number(curentEnd[1]),
                day: Number(curentEnd[0])
            }
        };

        /** Update date Rx.JS. */
        this.calendarShare.setDatePeriod(this.currentDate);
        
        window.onscroll = function() {
           
            if( document.body.scrollTop+document.documentElement.scrollTop > 240){
                scope.sticky = true;
            }
            else scope.sticky = false;
        };
    }

    onChanged(data) {
        let curentEnd = data.end.split('.');
        let curentStart = data.start.split('.');

        this.dateRange = {
            beginDate: {
                year: curentStart[2],
                month: Number(curentStart[1]),
                day: curentStart[0]
            },
            endDate: {
                year: curentEnd[2],
                month: Number(curentEnd[1]),
                day: curentEnd[0]
            }
        };
    }

    /**
     * Change date range and put to LS.
     * @param event - Change date event
     * */
    changeDateRange(event: IMyDateRangeModel): void {

        const start: string = formatDateByParam(event.beginEpoc, 'DD.MM.YYYY', 'X');
        const end: string = formatDateByParam(event.endEpoc, 'DD.MM.YYYY', 'X');

        /** Get month days range. */
        this.dateConfig = CalendarService.dateChange({start, end});

        LocalStorageService.setDateConfig(this.dateConfig);
        LocalStorageService.setCurrentDate({start, end});

        /** Update date Rx.JS. */
        this.calendarShare.setDatePeriod({start, end});
    }
}
