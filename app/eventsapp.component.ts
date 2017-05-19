import{Component} from '@angular/core';

@Component({
    selector:'events-app',
    template: `
    <navbar-top></navbar-top>
    <router-outlet></router-outlet>
    `
    
})

export class EventsAppComponent{
    
}