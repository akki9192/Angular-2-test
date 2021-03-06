import {Component,OnInit} from '@angular/core'
import {EventService,IEvent} from '../../shared/index'
import{ActivatedRoute} from  '@angular/router'

@Component({
   templateUrl:"app/events/eventdetails/eventdetails.comp.html",
    styles:[`
    .event-image{height:100px}
    `]
})

export class EventDetailsComponent implements OnInit{
    event:IEvent
    
    constructor(private eventService:EventService,private route:ActivatedRoute){
        
    }
    
    ngOnInit(){
        this.event=this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

}