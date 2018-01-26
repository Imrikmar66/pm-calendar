import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { DayCalendar } from '../class/DayCalendar';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

    @Input() day: Date;

    constructor( private calendarService:CalendarService ){}
    
    dayClicked(day: DayCalendar){
        this.calendarService.triggerDaySelect( day, this );
    }

}
