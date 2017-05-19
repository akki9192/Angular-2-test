import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEvent} from '../shared/event.model'


@Component({
    selector:'event-thumbnail',
   templateUrl:"app/events/eventthumb.comp.html",
   styleUrls:['app/mystyle.css'] 
})

export class EventThumbnailComponent{

    @Input() event:IEvent

    getStartTimeStyle(){
        if(this.event.time==='8:00 am'){
            return {color:'green','font-weight':'bold'}
        }else if(this.event.time==='10:00 am'){
            return {color:'red','font-weight':'bold'}
        }else{
            return {}
        }
    }

    getPriceClass(){
        if(this.event.price===950){
            return['bld']
        }else{
            return['italic']
        }
    }

  
}