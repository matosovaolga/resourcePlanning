import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CalendarDateShareService {

    /** Start and End Date. */
    private datePeriod = new BehaviorSubject<any>(null);
    /** Width one field. */
    private fieldWidth = new BehaviorSubject<any>(null);

    constructor() {}

    /**
     * Set and get Start/End date.
     * @param date - Obj start and end date
     * */
    setDatePeriod(date: {start: string, end: string}): void {
        this.datePeriod.next({date});
    }
    getDatePeriod(): Observable<any> {
        return this.datePeriod.asObservable();
    }

    /**
     * Set and get field width.
     * @param width - Field width.
     * */
    setFieldWidth(width: number): void {
        this.fieldWidth.next(width);
    }
    getFieldWidth(): Observable<any> {
        return this.fieldWidth.asObservable();
    }

}
