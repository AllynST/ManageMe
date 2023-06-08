export interface Project {
   id:number,
   Name:string,
   Desc:string,
   functionalities?:Functionality[],
   createdBy:number
   MembersID:number[]
}

export interface User{
  id:number
  Login:string,
  Password:string,
  Name:string,
  Surname:string,
  Permission:Permisions
}

export interface Functionality{
  id:number,
  Name:string,
  Desc:string,
  Priority:Priority,
  Project:Project,
  Owner:User,
  State:State,

  Tasks:Task[]
}

export interface Task{
  id:number,
  Name:string,
  Desc:string,
  Priority:Priority,
  Func:any,
  ExpTime:string,
  State:State,
  AddedDate:Date,
  StartDate:Date|undefined,
  FinishDate:Date|undefined
  User:User

}




enum Priority{

  very_low,
  low,
  medium,
  high,
  urgent
}

enum State{
  todo,
  doing,
  done
}

enum Permisions{
   admin,
   devops,
   developer
}


let enumValue = Permisions
