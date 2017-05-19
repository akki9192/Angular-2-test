import{NgModule} from '@angular/core'
import{BrowserModule} from'@angular/platform-browser'
import{EventsAppComponent} from './eventsapp.component'
import{AuthService} from './user/authservice'

import {EventListComponent,EventThumbnailComponent,CreateEventComponent} from './events/index'

// import{EventListComponent} from './events/eventlist.component'
// import{EventThumbnailComponent} from './events/eventthumbnail.component'
// import{CreateEventComponent} from './events/createevent.component'

import{NavbarComponent} from './nav/navbar.component'
import{ HttpModule }  from '@angular/http'

import {EventService,EventRouteActivator,DurationPipe} from './shared/index'

// import{EventService} from './shared/eventservice'
// import{EventRouteActivator} from './shared/EventRouteActivator'

import{EventDetailsComponent} from './events/eventdetails/eventdetails.component'
import{appRoutes} from './routes'
import{RouterModule} from '@angular/router'

import{ErrorComponent} from './errors/error.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {SessionComponent} from './events/session/session.component'
import {SessionList} from './events/session/sessionlist.component'



@NgModule({
    imports:[
        BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        ErrorComponent,
        SessionComponent,
        SessionList,
        DurationPipe
    ],
    providers:[
        EventService,
        AuthService,
        EventRouteActivator,
        {provide:'canDeactivateCreateEvent',useValue:checkDirtyState}
    ],
    bootstrap:[
        EventsAppComponent
    ],
    
})

export class AppModule{

}
function checkDirtyState(component:CreateEventComponent)
{
 if(component.isDirty){
return window.confirm('Do you really want to cancel?')
 }else{
     return true
 } 
}