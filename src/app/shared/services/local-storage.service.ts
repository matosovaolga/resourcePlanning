import {Injectable} from '@angular/core';
import {ICurrentDate} from '../interfaces/currentDate.interface';
import {EnumMonthItems} from '../interfaces/dateConfig.interface';

@Injectable()
export class LocalStorageService {

    public static checkInit() {
        const currentDate = localStorage.getItem('currentDate');
        const dateConfig = localStorage.getItem('dateConfig');
        
        return !(!currentDate || !dateConfig);
    }

    public static setCurrentDate(date: ICurrentDate) {
        
        localStorage.setItem('currentDate', JSON.stringify(date));
    }

    public static getCurrentDate(): ICurrentDate {
        const currentDate = localStorage.getItem('currentDate');
        return JSON.parse(currentDate);
    }

    public static setDateConfig(date: EnumMonthItems) {
        localStorage.setItem('dateConfig', JSON.stringify(date));
    }

    public static getDateConfig(): EnumMonthItems {
        const dateConfig = localStorage.getItem('dateConfig');
        return JSON.parse(dateConfig);
    }

    constructor() {}
}
