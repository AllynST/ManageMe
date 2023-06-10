import { Injectable } from '@angular/core';
import { User } from '../interfaces/dataModels';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Permissions } from '../interfaces/dataModels';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:BehaviorSubject<User> = new BehaviorSubject<User>(
    {
      id:0,
      Login:"AllynST",
      Password:"LosowyStringZnaków123@#",
      Name:"Allan",
      Surname:"Strawpool",
      Permission: Permissions.admin
    }
  )
  currentUser$ = this.currentUser as Observable<User>

  constructor() {    
  }

  getCurrentUser(){
    return this.currentUser$
  }


  login = () =>{

  }  

  register = () =>{

  }

  logout = () =>{

  }

}
