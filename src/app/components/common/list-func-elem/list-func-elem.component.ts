import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, map} from 'rxjs';
import { FunctionalitiesService } from 'src/app/Services/functionalities.service';
import { UserService } from 'src/app/Services/user.service';
import { Functionality, Priority, User } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-list-func-elem',
  templateUrl: './list-func-elem.component.html',
  styleUrls: ['./list-func-elem.component.scss']
})
export class ListFuncElemComponent implements OnInit {

  @Input() funcID!:number;
  @Output() popUpStateEmiter = new EventEmitter<void>()
  // @Output() popUpTarget

  protected func$!:Observable<Functionality>

  protected users$!: Observable<User[] | undefined>
  selectedFunc?: number;

  constructor(private funcService:FunctionalitiesService,private userService:UserService){

  }
  ngOnInit(): void {
    this.func$ = this.funcService.getFunc(this.funcID)
    this.users$ = this.userService.getUsers();
  }

  getFlagColor(prio: Priority){
    switch(prio){
      case Priority.very_low:
        return "text-white"

      case Priority.low:
        return"text-green"
   
      case Priority.medium:
        return"text-blue"
    
      case Priority.high:
        return"text-orange"
 
      case Priority.urgent:
        return"text-red"

    }
  }
  getUserData(userID:number|null):string{

    let output;
    this.users$.pipe(
      map((users) => users!.find((user:User) => userID === user.id)) 
    ).subscribe(val=>{
      output = val
    })
    return output != null ? (output as User).Login: ""
    
  }


}
