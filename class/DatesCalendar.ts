import { DEFAULT_LANG, DATE_LANGS } from './CalendarLangs';
import { MonthCalendar } from './MonthCalendar';
import { Calendar } from './Calendar';

export class DatesCalendar {

    private months: MonthCalendar[];

    constructor( from: Date, to: Date ){
        this.months = (new Calendar()).getMonthsFromTo(from, to);
    }

    getMonths(): MonthCalendar[] {
        return this.months;
    }

}