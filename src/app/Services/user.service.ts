import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, Permissions } from '../interfaces/dataModels';
import { sampleUsers } from '../interfaces/sampleData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : BehaviorSubject<User[]> = new BehaviorSubject<User[]>(
    sampleUsers
  );

  private users$ : Observable<User[]> = this.users.asObservable();

  

  constructor() { 

  }


  getUsers(){
    return this.users$;
  }

  getUsersFromIds(membersIds:number[]){
    return this.users$.pipe(
      map((users:any) => users.filter((user:User) => membersIds.includes(user.id)))      
    )
   
  }


  getUser(userID:number):Observable<User>{
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
