import { Injectable } from '@angular/core';
import { User } from '../interfaces/dataModels';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Permissions } from '../interfaces/dataModels';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:BehaviorSubject<User|null> = new BehaviorSubject<User|null>(
    {
      id:0,
      Login:"AllynST",
      Password:"LosowyStringZnaków123@#",
      Email:"sampleEmail@XD.com",
      Name:"Allan",
      Surname:"Strawpool",
      photoSrc:"genericphoto.jpg",
      Permission: Permissions.admin
    }
  )
  currentUser$ = this.currentUser as Observable<User|null>

  constructor(private userService:UserService) {    
  }

  getCurrentUser(){
    return this.currentUser$
  }

  getCurrentUserID():number{
    let targetID:number;
    this.currentUser$.subscribe((val) =>{targetID = val!.id})
    return targetID!;
  }


  login = (login:string,password:string):boolean =>{

    let outcome:boolean = false;
    this.userService.getUsers().subscribe(val=>{
      let targetUser = val.find((user:User)=>user.Login === login)
      if(targetUser && targetUser.Password === password){
        this.currentUser.next(targetUser)
        outcome = true;      
      }
    })
    return outcome;
  }  

  register = (user:User) =>{
    console.log(user)
    this.userService.addUser(user)
  }

  logout = () =>{
    this.currentUser.next(null)
  }

}
