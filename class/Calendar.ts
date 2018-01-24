import { WeekCalendar } from "./WeekCalendar";
import { MonthCalendar } from "./MonthCalendar";
import { DayCalendar } from "./DayCalendar";
import { DatesCalendar } from "./DatesCalendar";

export class Calendar {

    getFirstDayOfWeek( year, month ): Date {

        let first_day = new Date( year, month );
        while( first_day.getDay() > 0 ){
            first_day.setDate( first_day.getDate() - 1 );
        }

        return first_day;

    }

    getWeekDays( week: number, year: number, month: number ): DayCalendar[] {

        let week_days: DayCalendar[] = [];
        let the_day: Date = this.getFirstDayOfWeek( year, month );
        the_day.setDate( the_day.getDate() + (7 * week) );
        let counter: number = 0;

        while( counter < 7 ){
            let calc_date: Date = new Date( the_day.getTime() );
            let dayCalendar = new DayCalendar(counter, calc_date);
            week_days.push( dayCalendar );
            the_day.setDate( the_day.getDate() + 1 );
            counter++;
        }

        return week_days;

    }

    getMonthDays( year?: number, month?: number ): WeekCalendar[] {
        
        let last_day: Date = new Date( year, month, 1 );
        let weeksCalendar: WeekCalendar[] = [];
        for( let week = 0; last_day.getMonth() == month; week++ ){

            let days: DayCalendar[] = this.getWeekDays( week, year, month );
            let weekCalendar: WeekCalendar = new WeekCalendar( month, week, days );
            weeksCalendar.push( weekCalendar );
            last_day = days[days.length - 1].getObjDate();

        }

        return weeksCalendar;

    }

    getMonthsFromTo( from: Date, to: Date ): MonthCalendar[]{
        
        let monthsCalendar: MonthCalendar[] = [];
        let the_month: number = from.getMonth();
        let the_year: number = from.getFullYear();
        let ref_date: Date = new Date( from.getFullYear(), from.getMonth() );
        while( ref_date.getTime() < to.getTime() ){

            ref_date.setTime( new Date( the_year, the_month ).getTime() );

            let weeksCalendar: WeekCalendar[] = this.getMonthDays( the_year, the_month );
            let monthCalendar: MonthCalendar = new MonthCalendar( the_year, the_month, weeksCalendar );
            monthsCalendar.push( monthCalendar );

            the_month = (the_month + 1) % 11;
            if( the_month == 0 ){
                the_year ++;
            }
            
        }

        return monthsCalendar;

    }

}