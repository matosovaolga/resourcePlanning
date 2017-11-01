export interface IDateObject {
    [index: number]: {
        name: string,
        daysRange: [{
            serial: number,
            weekIndex: number
        }]
    }
}
