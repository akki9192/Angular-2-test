"use strict";
var eventlist_component_1 = require('./events/eventlist.component');
var eventdetails_component_1 = require('./events/eventdetails/eventdetails.component');
var createevent_component_1 = require('./events/createevent.component');
var error_component_1 = require('./errors/error.component');
var EventRouteActivator_1 = require('./shared/EventRouteActivator');
var session_component_1 = require('./events/session/session.component');
exports.appRoutes = [
    { path: 'events', component: eventlist_component_1.EventListComponent },
    { path: 'events/session/new', component: session_component_1.SessionComponent },
    { path: 'event/createEvent', component: createevent_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: eventdetails_component_1.EventDetailsComponent, canActivate: [EventRouteActivator_1.EventRouteActivator] },
    { path: '404', component: error_component_1.ErrorComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map