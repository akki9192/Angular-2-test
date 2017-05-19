import {Component} from'@angular/core'
import {AuthService} from '../user/authservice'

@Component({
    selector:'navbar-top',
    templateUrl:"app/nav/navbar.component.html"
})


export class NavbarComponent{
    isTrue:boolean = false;

    constructor(private authService:AuthService){
        this.isTrue= authService.isAuthenticated();
        console.log(this.isTrue)
    }



}

