import{Routes} from '@angular/router'
import{EventListComponent} from './events/eventlist.component'
import {EventDetailsComponent} from './events/eventdetails/eventdetails.component'
import {CreateEventComponent} from './events/createevent.component'
import {ErrorComponent} from './errors/error.component'
import {EventRouteActivator} from'./shared/EventRouteActivator'
import {SessionComponent} from './events/session/session.component'

export const appRoutes:Routes=[
    {path:'events',component:EventListComponent},
    {path:'events/session/new',component:SessionComponent},
    {path:'event/createEvent',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'404',component:ErrorComponent},
    {path:'', redirectTo:'events', pathMatch:'full'},
    {path:'user',loadChildren:'app/user/user.module#UserModule'}
]