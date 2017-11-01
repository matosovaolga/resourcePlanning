interface EnumMonthItem {
    [idex: number]: {
        serial: number,
        weekIndex: number
    }
}

export interface EnumMonthItems {
    [index: number]: {
        name: string,
        daysRange: EnumMonthItem
    }
}
