import {Component,Input} from '@angular/core'
import {ISession} from '../../shared/event.model'

@Component({
    moduleId:module.id,
    selector:'session-list',
    templateUrl:'Sessionlist.comp.html'
})
export class SessionList{

  @Input()  sessions:ISession[]
  @Input() filterBy:string
  visibleSessions:ISession[]

  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy)
    }
  }

  filterSessions(filter){
    if(filter==='all'){
      this.visibleSessions=this.sessions.slice(0)
    }
    else{
      this.visibleSessions=this.sessions.filter(session=>{return session.level.toLowerCase()===filter})
    }

  }

}