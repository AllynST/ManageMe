export interface Project {
   Name:string,
   Desc:string,
   Functionalities:Functionality[],
   User:User
}

export interface User{
  Login:string,
  Password:string,
  Name:string,
  Surname:string,
  Permission:Permisions
}

export interface Functionality{
  Name:string,
  Desc:string,
  Priority:Priority,
  Project:Project,
  Owner:User,
  State:State,

  Tasks:Task[]
}

export interface Task{
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

let string = 'Admin'



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
