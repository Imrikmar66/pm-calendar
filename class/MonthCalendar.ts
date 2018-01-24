import { WeekCalendar } from "./WeekCalendar";
import { DEFAULT_LANG, DATE_LANGS } from "./CalendarLangs";

export class MonthCalendar {
    
    private year: number;
    private month_number: number;
    private weeks: WeekCalendar[];

    constructor( year: number, month_number: number, weeks: WeekCalendar[] ) {
        this.year = year;
        this.month_number = month_number;
        this.weeks = weeks;
    }

    getWeeks(): WeekCalendar[] {
        return this.weeks;
    }

    getFullMonth( lang: string = DEFAULT_LANG ): string {
        return DATE_LANGS.months.full[lang][this.month_number];
    }

    getMonth( lang: string = DEFAULT_LANG ): string {
        return DATE_LANGS.months.short[lang][this.month_number];
    }

    getMonthNumber(): number{
        return this.month_number;
    }

    getYear(): number{
        return this.year;
    }

}