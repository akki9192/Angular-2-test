import {Component} from '@angular/core'
import{AuthService} from './authservice'
import{Router} from '@angular/router'


@Component({
    templateUrl:"app/user/login.comp.html",
    styles:[`
        em{color:red;float:right}    
    `]

})

export class LoginComponent{

    constructor(private authService:AuthService,private router:Router){}

login(formValues){
    this.authService.loginUser(formValues.userName,formValues.password)
    this.router.navigate(['events']);
}
}