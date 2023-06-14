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
      Email:"sampleEmail@XD.com",
      Name:"Allan",
      Surname:"Strawpool",
      photoSrc:"genericphoto.jpg",
      Permission: Permissions.admin
    }
  )
  currentUser$ = this.currentUser as Observable<User>

  constructor() {    
  }

  getCurrentUser(){
    return this.currentUser$
  }

  getCurrentUserID():number{
    let targetID:number;
    this.currentUser$.subscribe((val) =>{targetID = val.id})
    return targetID!;
  }


  login = () =>{

  }  

  register = () =>{

  }

  logout = () =>{

  }

}
