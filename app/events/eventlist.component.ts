import {Component,OnInit} from '@angular/core'
import {EventService,IEvent} from '../shared/index'


@Component({
   selector:'event-list',
   styleUrls:['app/mystyle.css'],
   template:`
   
   <div>
   <h1>Upcoming Angular Events</h1>
   <hr/>
   <div *ngFor="let event of events" class="col-md-5">
  <event-thumbnail [event]="event"></event-thumbnail>
  </div>
   </div>
   `
   
})

export class EventListComponent implements OnInit {
  
events:IEvent[]
constructor(private eventService:EventService){
  

}

ngOnInit(){
  this.events=this.eventService.getEvents()
}
}