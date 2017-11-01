import {Injectable} from '@angular/core';
import {IDateObject} from './utils/date-object.interface';

import * as dateUtil from './utils/date.util';
import * as moment from 'moment/moment';
import {GantHeaderComponent} from '../gant-header/gant-header.component';
import {LocalStorageService} from '../../shared/services/local-storage.service';

export interface IStartEndDate {
    start: string,
    end: string
}

/** Class CalendarService. */
@Injectable()
export class CalendarService {

    public static getDefaultDate() {
        const start = moment().format('DD.MM.YYYY');
        const end = dateUtil.getEndDay(start, 'DD.MM.YYYY');
        return {start: start, end: end}
    }

    /**
     * If date config was changed.
     * */
    public static dateChange(date: IStartEndDate) {
        return CalendarService.handleDate(date, true);
    }

    /**
     * Create month array with days range.
     * @param date: start and end date object.
     * @param changeDate - If called from dateChange.
     * */
    public static handleDate(date: IStartEndDate, changeDate: boolean): IDateObject {

        const startMonth: string = dateUtil.formatDateByParam(date.start, 'MM');
        const endMonth: string = dateUtil.formatDateByParam(date.end, 'MM');
        const months: any[] = [];

        if (startMonth !== endMonth) {
            const monthRage = +endMonth - +startMonth;
            let end = moment().month(startMonth).add(-1, 'month').daysInMonth() + moment().month(startMonth).add(-1, 'month').format(".MM.YYYY");
            months.push(dateUtil.formatMonth(date.start, (changeDate) ? end : null));

            for (let i = 0; i < monthRage - 1; i++) {
                end = moment().month(startMonth).add(i, 'month').daysInMonth() + moment().month(startMonth).add(i, 'month').format(".MM.YYYY");
                let nextMonth: string = '01.' + moment().month(startMonth).add(i, 'month').format("MM.YYYY");
                months.push(dateUtil.formatMonth(nextMonth, end));
            }
            const nextMonth: string = '01.' + dateUtil.formatDateByParam(date.end, 'MM.YYYY');
            months.push(dateUtil.formatMonth(nextMonth, date.end));
        } else {
            months.push(dateUtil.formatMonth(date.start, (changeDate) ? date.end : null));
        }

        return months;
    }

    /**
     * Create new date config object.
     * */
    public static init(): IDateObject {
        const defaultDate = CalendarService.getDefaultDate();
        const date = CalendarService.handleDate(defaultDate, false);
        LocalStorageService.setCurrentDate(defaultDate);
        LocalStorageService.setDateConfig(date);
        return date;
    }

    constructor() {}
}
