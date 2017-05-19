"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var eventsapp_component_1 = require('./eventsapp.component');
var authservice_1 = require('./user/authservice');
var index_1 = require('./events/index');
// import{EventListComponent} from './events/eventlist.component'
// import{EventThumbnailComponent} from './events/eventthumbnail.component'
// import{CreateEventComponent} from './events/createevent.component'
var navbar_component_1 = require('./nav/navbar.component');
var http_1 = require('@angular/http');
var index_2 = require('./shared/index');
// import{EventService} from './shared/eventservice'
// import{EventRouteActivator} from './shared/EventRouteActivator'
var eventdetails_component_1 = require('./events/eventdetails/eventdetails.component');
var routes_1 = require('./routes');
var router_1 = require('@angular/router');
var error_component_1 = require('./errors/error.component');
var forms_1 = require('@angular/forms');
var session_component_1 = require('./events/session/session.component');
var sessionlist_component_1 = require('./events/session/sessionlist.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                eventsapp_component_1.EventsAppComponent,
                index_1.EventListComponent,
                index_1.EventThumbnailComponent,
                navbar_component_1.NavbarComponent,
                eventdetails_component_1.EventDetailsComponent,
                index_1.CreateEventComponent,
                error_component_1.ErrorComponent,
                session_component_1.SessionComponent,
                sessionlist_component_1.SessionList,
                index_2.DurationPipe
            ],
            providers: [
                index_2.EventService,
                authservice_1.AuthService,
                index_2.EventRouteActivator,
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
            ],
            bootstrap: [
                eventsapp_component_1.EventsAppComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('Do you really want to cancel?');
    }
    else {
        return true;
    }
}
//# sourceMappingURL=app.module.js.map