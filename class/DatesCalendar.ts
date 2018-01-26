import { MonthCalendar } from './MonthCalendar';
import { Calendar } from './Calendar';
import { DayCalendar } from './DayCalendar';

export class DatesCalendar {

    private months: MonthCalendar[];

    constructor( from: Date, to: Date ){console.log(from, to);
        this.months = (new Calendar()).getMonthsFromTo(from, to);
    }

    getMonths(): MonthCalendar[] {
        return this.months;
    }

    getDay( arg_date: Date ): DayCalendar | false {
        for( let month of this.months ){
            for( let weeks of month.getWeeks()){
                for( let days of weeks.getDays() ){

                    if( days.getWeekNumber() === -1 ) continue;

                    let formated_arg_date: Date = new Date(arg_date.getFullYear(), arg_date.getMonth(), arg_date.getDate());
                    let day: Date = days.getObjDate();
                    let formated_day: Date = new Date( day.getUTCFullYear(), day.getMonth(), day.getDate() );
                    if( formated_day.getTime() == formated_arg_date.getTime() ){
                        return days;
                    }
                }
            }
        }
        return false;
    }

    getDaysInInterval( datestart: Date, dateend: Date ): DayCalendar[] {
        let found_days: DayCalendar[] = [];
        for( let month of this.months ){
            for( let weeks of month.getWeeks()){
                for( let days of weeks.getDays() ){

                    let formated_datestart: Date = new Date(datestart.getFullYear(), datestart.getMonth(), datestart.getDate());
                    let formated_dateend: Date = new Date(dateend.getFullYear(), dateend.getMonth(), dateend.getDate())
                    let day: Date = days.getObjDate();
                    let formated_day: Date = new Date( day.getUTCFullYear(), day.getMonth(), day.getDate() );
                    if( formated_day.getTime() >= formated_datestart.getTime() && formated_day.getTime() <= formated_dateend.getTime() ){
                        found_days.push( days );
                    }
                }
            }
        }
        return found_days;
    }

}