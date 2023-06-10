import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, Permissions } from '../interfaces/dataModels';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {
      id:0,
      Login:"AllynST",
      Password:"LosowyStringZnaków123@#",
      Name:"Allan",
      Surname:"Strawpool",
      Permission: Permissions.admin
    }
  ]);

  private users$ : Observable<User[]> = this.users.asObservable();

  

  constructor() { 

  }


  getUsers(){
    return this.users$;
  }


  getUser(userID:number){
    return this.users$.pipe(
      map((users:any) => users.find((user:User) => userID === user.id))      
    )
  }

  addUser(user:User){
    let temp = this.users.getValue()
    temp.push(user)
    this.users.next(temp)
  }

  updateUser(){
    //TODO :)
  }
  
  deleteUser(userID:number){
    let temp = this.users.getValue()
    temp.splice(temp.findIndex((user:User)=> userID === user.id),1)
    this.users.next(temp)
  }
}
