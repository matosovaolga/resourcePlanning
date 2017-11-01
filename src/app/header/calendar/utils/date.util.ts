import * as moment from 'moment';

export const dateFormat = 'DD.MM.YYYY';

// ICM - In Current Month
export function getEndDay(begin: string, format: string = dateFormat): string {
    const countDaysICM: number = getDaysInMonth(begin) - Number(formatDateByParam(begin, 'DD'));
    return moment(begin, format).add(countDaysICM, 'days').add(31 - countDaysICM, 'days').format(format);
}

export function getDaysInMonth(month): number {
    return moment(month, dateFormat).daysInMonth();
}

export function formatDateByParam(data, param, currentFormat = dateFormat): string {
    return moment(data, currentFormat).format(param)
}

export function getDaysRange(start: string, fixEnd: string): object[] {
    const daysRange: object[] = [];
    let i: number = Number(formatDateByParam(start, 'DD'));

    let endDay: string | number;

    if (fixEnd) {
        endDay = formatDateByParam(fixEnd, 'DD');
    } else {
        endDay = getDaysInMonth(start);
    }

    for (i; i <= endDay; i++) {
        const currentDay = `2017-${formatDateByParam(start, 'MM')}-${i}`;
        const dayObj = {
            serial: Number(i),
            weekIndex: moment(currentDay, 'YYYY-MM-D').day()
        };
        daysRange.push(dayObj);
    }
    return daysRange;
}

export function formatMonth(start: string, end?: string): object {
    return {
        name: formatDateByParam(start, 'MMMM'),
        daysRange: getDaysRange(start, end)
    }
}

export function convertUnix(time: number): string {
    return moment.unix(time).format(dateFormat);
}


export function formatDate(date: string, format: string): string {
    return moment(date, dateFormat).format(format);
}

export function getUnix(date: string): number {
    return Number(moment(date, dateFormat).format('X'));
}

interface IDate {
    start: string,
    end: string
}

interface IHandleDate {
    start: number,
    end: number
}

export function handleDate(current: IDate, newMonth: IDate): IHandleDate {

    if (formatDate(current.start, 'M') !== formatDate(newMonth.start, 'M')) {
        return;
    }

    const fDiff = getUnix(current.start) - getUnix(newMonth.start);
    const sDiff = getUnix(current.end) - getUnix(newMonth.end);
    const startDate = moment(current.start, dateFormat).subtract(fDiff, 'seconds').format(dateFormat);

    let endDate = current.end;

    if (sDiff > 0) {
        endDate = moment(current.end, dateFormat).subtract(sDiff, 'seconds').format(dateFormat);
    }

    const index = Number(formatDate(startDate, 'D')) - Number(formatDate(current.start, 'D'));

    return {
        start: index,
        end: Number(formatDate(endDate, 'D')) - index + 1
    }
}
