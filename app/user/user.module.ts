import{NgModule} from '@angular/core'
import{CommonModule} from '@angular/common'
import{ProfileComponent} from './profile.component'
import{userRoutes} from './userroute'
import{RouterModule} from '@angular/router'
import{LoginComponent} from './login.component'
import {FormsModule,ReactiveFormsModule}  from '@angular/forms'

@NgModule({
    imports:[
        ReactiveFormsModule,FormsModule,CommonModule,RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        LoginComponent,
        

    ]

})

export class UserModule{

}