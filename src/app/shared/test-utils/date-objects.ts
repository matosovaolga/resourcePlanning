import {ICurrentDate} from '../interfaces/currentDate.interface';
import {EnumMonthItems} from '../interfaces/dateConfig.interface';
import {IMyDateRangeModel} from 'mydaterangepicker';

export const _dateConfig_: EnumMonthItems = [
    {
        name: 'July',
        daysRange: [{
            serial: 1,
            weekIndex: 1
        }]
    },
    {
        name: 'May',
        daysRange: [
            {
                serial: 1,
                weekIndex: 1
            },
            {
                serial: 2,
                weekIndex: 2
            }]
    }
];


export const _currentDate_: ICurrentDate = {
    start: '11.12.2017',
    end: '11.12.2017'
};


export const _event_: IMyDateRangeModel = {
    beginDate: {
        day: 10,
        month: 7,
        year: 2017
    },
    beginEpoc: 1499634000,
    beginJsDate: new Date(),
    endDate: {
        day: 10,
        month: 7,
        year: 2017
    },
    endEpoc: 1501102800,
    endJsDate: new Date(),
    formatted: '2017-07-10 - 2017-07-27'
};
