import { Injectable } from '@angular/core';
import { DayCalendar } from '../class/DayCalendar';

@Injectable()
export class CalendarService {

    private actions_date_selected: Function[] = [];

    triggerDaySelect( day: DayCalendar ){
        for( let action of this.actions_date_selected ){
            action( day );
        }
    }

    onDateSelected( action: Function ){
        this.actions_date_selected.push( action );
    }

    clearEvents(){
        this.actions_date_selected = [];
    }

}
