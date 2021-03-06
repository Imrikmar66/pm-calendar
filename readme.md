
# PM-CALENDAR
This is an editable module to include directly in src/app : 

## Installation
- npm install pm-calendar
- Moove the folder ./nodes_modules/pm-calendar to ./src/app
- Import PmCalendarModule in app.module.ts : 
```typescript
import { PmCalendarModule } from './pm-calendar/pm-calendar.module';
//...
//...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PmCalendarModule //Charger le module ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Usage

### Template html

The component model is : 
```html
<app-calendar [datestart]="datestart" [dateend]="dateend" ></app-calendar>
```
#### Parameters : 
- datestart: Date - First month's date to display
- dateend: Date - Last month's date to display
- lang: string (Optionnal) - The calendar lang to display ( Default: "fr" )

##### Languages : 
Language list is available and editable in ./class/CalendarLang.ts as the default lang ( DEFAULT_LANG )

### Component ts
You can use the CalendarService to access calendar's events :
```typescript
import { CalendarService } from './pm-calendar/services/calendar.service';
//...
//...
constructor( private calendarService: CalendarService ){ //...
```
#### Available event : 

- onDateSelected( method: Function ): void
- onCalendarReady( method: Function ): void

#### Available method : 
- getDay( date: Date, disabled?: boolean ): DayCalendar
- getDaysInInterval( datestart: Date, dateend: Date ): DayCalendar[]
```typescript
import { CalendarService } from './pm-calendar/services/calendar.service';
import { DayCalendar } from './pm-calendar/class/DayCalendar';
//...
//...
constructor( private calendarService: CalendarService ){

	this.calendarService.onDateSelected( ( day: DayCalendar ) => {
	    console.log( day );
    });
    
    this.calendarService.onCalendarReady( () => {

        //get the day corresponding to the searchedDate and add class test to it
        let day: DayCalendar | false = this.calendarService.getDay( new Date(2017, 9, 30) );
        if( day ){
            ( day as DayCalendar ).addClass("test");
        }

         //get the days corresponding to the interval and add class test to them
         let start: Date = new Date(2017, 4, 30);
         let end: Date = new Date( 2017, 5, 2 );
         let searchs: DayCalendar[] = this.calendarService.getDaysInInterval( start, end );
         for( let search of searchs ){
                if( search.getWeekNumber() > -1 ){
                    search.addClass("test");
                }
         }
    } )
}
```
The returned class ( DayCalendar ) has the current method : 

- getClasses(): string[]
- setClasses( classes: string[] ): void
- addClass(): void
- removeClass(): void
- getObjDate(): Date
- getWeekNumber(): number
```typescript
day.addClass("test"); //Add the 'test' class to the day's div
day.removeClass("test"); //Remove the 'test' class to the day's div
day.getObjDate(); //Return corresponding Date object
day.getWeekNumber(); //Return day's week current index in the month
day.getClasses(); //Return the class'list of day's div
day.setClasses(["test", "disabled"]); //Set the class list through an array
```
#### Leave the component 
Remove the linked events 
```typescript
export class AppComponent implements OnDestroy {
//...
//...
ngOnDestroy(){
	this.calendarService.clearEvents();
}
```

## Styles

All styles are editables :

- ./calendar/component.calendar.css
- ./calendar/component.week.css
- ./calendar/component.day.css // File for style the class managed via day.addClass / day.removeCass ...ect.

Care, much css styles are here for the calendar's table aspect :
```css
/* calendar's "table" aspect */
.dhead {
    display: flex;
}
.dhcol {
    width: 100px;
}
.drow {
    display: flex;
}
.dcol {
    width: 100px;
}
/* jours désactivés */
.dcol.disabled {
    background-color: grey;
}
```