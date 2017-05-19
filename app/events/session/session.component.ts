import {Component} from '@angular/core'
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ISession} from '../../shared/event.model'

@Component({
    templateUrl:"app/events/session/session.comp.html",
    styles:[`
        em{color:red;float:right}    
    `]
})
export class SessionComponent{
sessionForm:FormGroup
name:FormControl
presenter:FormControl
duration:FormControl
level:FormControl
abstract:FormControl

ngOnInit(){
    this.name=new FormControl('',Validators.required)
    this.presenter=new FormControl('',Validators.required)
    this.duration=new FormControl('',Validators.required)
    this.level=new FormControl('',Validators.required)
    this.abstract=new FormControl('',[Validators.required,this.restrictedWord])

    this.sessionForm=new FormGroup({
        name:this.name,
        presenter:this.presenter,
        duration:this.duration,
        level:this.level,
        abstract:this.abstract
    })
}
    saveSession(formValues){
        let session:ISession={
        id:undefined,
        name:formValues.name,
        duration:formValues.duration,
        presenter:formValues.presenter,
        level:formValues.level,
        abstract:formValues.abstract,
        voters:[]
        }
        console.log(session)

    }

    restrictedWord(control:FormControl):{[key:string]:any}{
        return control.value.includes("bad")?{'restrictedWord':'bad'}:null
    }
}