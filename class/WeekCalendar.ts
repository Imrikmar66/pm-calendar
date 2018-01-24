import { DayCalendar } from "./DayCalendar";

export class WeekCalendar {

    private month_number: number;
    private week_number: number;
    private days: DayCalendar[];

    constructor( month_number: number, week_number: number, days: DayCalendar[] ) {
        this.month_number = month_number;
        this.week_number = week_number;
        this.days = days;
    }

    getDays(): DayCalendar[] {
        return this.days;
    }

    getWeekNumber(): number {
        return this.week_number;
    }

    getMonthNumber(): number{
        return this.month_number;
    }

}