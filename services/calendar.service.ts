import { Injectable } from '@angular/core';
import { DayCalendar } from '../class/DayCalendar';
import { DatesCalendar } from '../class/DatesCalendar';
import { CalendarComponent } from '../calendar/calendar.component';
import { DayComponent } from '../day/day.component';

@Injectable()
export class CalendarService {

    private actions_date_selected: Function[] = [];
    private actions_calendar_selected: Function[] = [];
    private calendar_months: DatesCalendar;

    generateCalendar( datestart: Date, dateend: Date, context: CalendarComponent): DatesCalendar {
        
        if( !context ){
            throw new Error( "This method is reserved to CalendarComponent" );
        }

        this.calendar_months = new DatesCalendar( datestart, dateend );
        this.triggerCalendarReady();
        return this.calendar_months;
    }

    getDay( date: Date ): DayCalendar|false {
        return this.calendar_months.getDay( date );
    }

    getDaysInInterval( datestart: Date, dateend: Date ): DayCalendar[] {
        return this.calendar_months.getDaysInInterval( datestart, dateend);
    }

    triggerDaySelect( day: DayCalendar, context: DayComponent ){

        if( !context ){
            throw new Error( "This method is reserved to DayComponent" );
        }

        for( let action of this.actions_date_selected ){
            action( day );
        }
    }

    onDateSelected( action: Function ){
        this.actions_date_selected.push( action );
    }

    private triggerCalendarReady(  ){
        for( let action of this.actions_calendar_selected ){
            action();
        }
    }

    onCalendarReady( action: Function ){
        this.actions_calendar_selected.push( action );
    }

    clearEvents(){
        this.actions_date_selected = [];
    }

}
