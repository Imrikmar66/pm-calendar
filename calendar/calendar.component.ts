import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatesCalendar } from '../class/DatesCalendar';
import { DATE_LANGS, DEFAULT_LANG } from '../class/CalendarLangs';

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

    ngOnInit(){

        // Calendar configuration
        this.displayed_months = new DatesCalendar( this.datestart, this.dateend );
        if( this.lang == null ){
            this.lang = DEFAULT_LANG;
        }
        this.str_days = DATE_LANGS.days.full[this.lang];

    }

}