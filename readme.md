# PM-CALENDAR
Il s'agit d'un module modifiable a inclure directement dans src/app : 

## Installation
- npm install pm-calendar
- Déplacer le dossier ./nodes_modules/pm-calendar dans ./src/app
- Charger PmCalendarModule dans les imports de app.module.ts : 
```typescript
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

## Utilisation

### Template html

Le modèle du composant est le suivant : 
```html
<app-calendar [datestart]="datestart" [dateend]="dateend" ></app-calendar>
```
#### Paramètres : 
- datestart : La date du premier mois à afficher
- dateend : La date du dernier mois à afficher
- lang (Optionnel) : La langue du calendrier à afficher ( Par default: "fr" )

##### Langues : 
La liste des langue est disponible et modifiable dans ./class/CalendarLangs.ts ainsi que la langue par default ( DEFAULT_LANG )

### Component ts
On peut utiliser le service CalendarService pour accéder aux événements relatif au calendrier :
```typescript
import { CalendarService } from './pm-calendar/services/calendar.service';
//...
//...
constructor( private calendarService: CalendarService ){ //...
```
#### Evénements disponibles : 

- onDateSelected() : 
```typescript
import { CalendarService } from './pm-calendar/services/calendar.service';
import { DayCalendar } from './pm-calendar/class/DayCalendar';
//...
//...
constructor( private calendarService: CalendarService ){
	this.calendarService.onDateSelected( ( day: DayCalendar ) => {
	    console.log( day );
	});
}
```
La classe retournée ( DayCalendar ) possède les méthodes suivantes : 

- getClasses(): string[]
- setClasses( classes: string[] ): void
- addClass(): void
- removeClass(): void
- getObjDate(): Date
- getWeekNumber(): number
```typescript
day.addClass("test"); //Ajoute la classe test à la case de la date
day.removeClass("test"); //Retire la classe test de la case de la date
day.getObjDate(); //Renvoie l'objet Date correspondant
day.getWeekNumber(); //Renvoie l'index de la semaine correspondant à ce jour dans le mois
day.getClasses(); //Renvoie la liste des classes présente sur la case
day.setClasses(["test", "disabled"]); //Définit la liste des classes de la case
```
#### Quitter le composant 
Retirer les événements liés au service : 
```typescript
export class AppComponent implements OnDestroy {
//...
//...
ngOnDestroy(){
	this.calendarService.clearEvents();
}
```

## Styles

Tout les styles sont modifiable :

- ./calendar/component.calendar.css
- ./calendar/component.week.css
- ./calendar/component.calendar.css

Attention cependant certains css ont été pensé pour garder l'aspect "tableau" du calendrier : 
```css
/* Aspect 'tableau' du calendrier */
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