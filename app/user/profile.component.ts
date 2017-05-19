import {Component} from  '@angular/core'
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {AuthService} from './authservice'
import {Router} from '@angular/router'

@Component({
    templateUrl:'app/user/profilecomp.html',

    styles:[`
        em{color:red;float:right}    
    `]

})

export class ProfileComponent{
    profileForm:FormGroup
    
    firstName:FormControl
    lastName:FormControl

    constructor(private authService:AuthService,private router:Router){}

    ngOnInit(){
        this.firstName=new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
        this.lastName=new FormControl(this.authService.currentUser.lastName,Validators.required)
        this.profileForm=new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        })
    }

    validateFirstName(){
        return this.firstName.valid || this.firstName.untouched
    }
    validateLastName(){
        return this.lastName.valid || this.lastName.untouched

    }

    saveProfile(formValues){
        // console.log("form values: "+formValues);
        this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
        this.router.navigate(['events'])
    }
}