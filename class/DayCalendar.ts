export class DayCalendar {

    private week_number: number;
    private date: Date;
    private classes: string[];

    constructor( week_number: number, date: Date, classes: string[] = [] ) {
        this.week_number = week_number;
        this.date = date;
        this.classes = classes;
    }

    getClasses(): string[] {
        return this.classes;
    }

    addClass( class_name: string ){
        if( this.classes.indexOf( class_name ) < 0 ){
            this.classes.push( class_name );
        }
    }

    removeClass( class_name: string ){
        const index: number = this.classes.indexOf( class_name );
        if( index > -1 ){
            this.classes.splice( index, 1 );
        }
    }

    setClasses( classes_name: string[] ){
        this.classes = classes_name;
    }

    getWeekNumber(): number {
        return this.week_number;
    }

    getObjDate(): Date {
        return this.date;
    }

}