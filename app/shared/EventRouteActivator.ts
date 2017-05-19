import{Injectable} from '@angular/core'
import{Router,ActivatedRouteSnapshot,CanActivate} from '@angular/router'
import{EventService} from './eventservice'


@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService:EventService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot){
        const eventExist=!!this.eventService.getEvent(+route.params['id'])
         if(!eventExist){
             this.router.navigate(['/404'])
         }else{
            return eventExist
         }
        
}
}