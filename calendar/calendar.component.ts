import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatesCalendar } from '../class/DatesCalendar';
import { DATE_LANGS, DEFAULT_LANG } from '../class/CalendarLangs';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    @Input() datestart: Date;
    @Input() dateend: Date;
    @Input() lang: string;

    now = new Date();
    displayed_months: DatesCalendar;
    str_days: string[];

    constructor( private calendarService: CalendarService ){}

    ngOnInit(){

        // Calendar configuration
        this.displayed_months = this.calendarService.generateCalendar( this.datestart, this.dateend, this );

        if( this.lang == null ){
            this.lang = DEFAULT_LANG;
        }
        this.str_days = DATE_LANGS.days.full[this.lang];

    }

}