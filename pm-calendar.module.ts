import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { WeekComponent } from './week/week.component';
import { CalendarService } from './services/calendar.service';
import { DayComponent } from './day/day.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CalendarComponent,
      WeekComponent,
      DayComponent
  ],
  exports: [
      CalendarComponent
  ],
  providers: [CalendarService]
})
export class PmCalendarModule { }
