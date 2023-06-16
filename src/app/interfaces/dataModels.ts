export interface Project {
   id:number,
   Name:string,
   Desc:string,
   functionalities?:number[],
   createdBy:number
   MembersID:number[]
}

export interface User{
  id:number
  Login:string,
  Password:string,
  Email:string,
  Name:string,
  Surname:string,
  photoSrc:string,
  Permission:Permissions
}

export interface Functionality{
  id:number,
  ProjectID:number,
  Name:string,
  Desc:string,
  Priority:Priority,
  Owner:number,
  State:State,
  Tasks:number[]
}

export interface Task{
  id:number,
  funcID:number,
  ProjectID:number,
  Name:string,
  Desc:string,
  Priority:Priority,
  ExpTime:Date,
  State:State,
  AddedDate:Date,
  StartDate:Date|null,
  FinishDate:Date|null,
  OwnerID:number| null
  AssignedID:number | null

}




export enum Priority{
  very_low,
  low,
  medium,
  high,
  urgent
}

export enum State{
  todo,
  doing,
  done
}

export enum Permissions{
   admin,
   devops,
   developer
}


