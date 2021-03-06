import {Component} from '@angular/core'
import{Router} from '@angular/router'
import {EventService} from '../shared/eventservice'

@Component({

templateUrl:"app/events/createevent.comp.html"


})

export class CreateEventComponent{

isDirty:boolean=true

constructor(private router:Router,private eventService:EventService){}

cancel(){
this.router.navigate(['/events']);
}

saveEvent(formValues){
    // console.log(formValues)
    this.eventService.saveEvent(formValues)
    this.isDirty=false
    this.router.navigate(['/events'])

}
}