import { Functionality, Priority, State, Task, User,Permissions } from "./dataModels";

export const sampleUsers:User[] =[
  {
  id:0,
  Login:"AllynST",
  Password:"LosowyStringZnaków123@#",
  Email:"sampleEmail@XD.com",
  Name:"Allan",
  Surname:"Strawpool",
  photoSrc:"genericphoto.jpg",
  Permission: Permissions.admin
  },
  {
  id:1,
  Login:"admin",
  Password:"admin",
  Email:"admin",
  Name:"admin",
  Surname:"adminowski",
  photoSrc:"genericphoto.jpg",
  Permission: Permissions.admin
  }
]

export const sampleTasks:Task[] =[
{
    "id": 1,
    "funcID":1,
    "ProjectID":1,
    "Name": "Implement Login Feature",
    "Desc": "Implement the login functionality for the application",
    "Priority": Priority.medium,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-01T10:00:00Z"),
    "StartDate": new Date("2023-06-05T09:00:00Z"),
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": 0
},
{
    "id": 2,
    "funcID":1,
    "ProjectID":1,
    "Name": "Update Database Schema",
    "Desc": "Modify the database schema to accommodate new requirements",
    "Priority": Priority.medium,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.todo,
    "AddedDate": new Date("2023-06-02T14:30:00Z"),
    "StartDate": null,
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": 0
  },
  {
    "id": 3,
    "funcID":1,
    "ProjectID":1,
    "Name": "Implement User Registration",
    "Desc": "Add functionality for users to register an account",
    "Priority": Priority.high,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-03T09:45:00Z"),
    "StartDate": new Date("2023-06-06T11:00:00Z"),
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": 0
  },
  {
    "id": 4,
    "funcID":1,
    "ProjectID":1,
    "Name": "Refactor Codebase",
    "Desc": "Optimize and improve the existing code structure",
    "Priority": Priority.very_low,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-04T13:15:00Z"),
    "StartDate": null,
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": 0
  },
  {
    "id": 5,
    "funcID":1,
    "ProjectID":1,
    "Name": "Add Unit Tests",
    "Desc": "Write comprehensive unit tests for the application components",
    "Priority": Priority.urgent,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.done,
    "AddedDate": new Date("2023-06-05T15:30:00Z"),
    "StartDate": new Date("2023-06-08T10:00:00Z"),
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": 0
  },
  {
    "id": 6,
    "funcID":1,
    "ProjectID":1,
    "Name": "Optimize Performance",
    "Desc": "Improve the application's performance and response time",
    "Priority": Priority.urgent,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.todo,
    "AddedDate": new Date("2023-06-06T12:45:00Z"),
    "StartDate": null,
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": 0
  },
]


export const sampleFunc : Functionality[] = [
{
  
    id:1,
    Name:"Project setup",
    ProjectID:1,
    Desc:"setupik",
    Priority:Priority.high,
    Owner:0,
    State:State.doing,
    Tasks:[1,2,3,4,5]

},
{
  
    id:2,
    Name:"Project setup",
    Desc:"setupik",
    ProjectID:1,
    Priority:Priority.high,
    Owner:0,
    State:State.doing,
    Tasks:[1,2,3,4,5]

},
{
  
    id:3,
    ProjectID:1,
    Name:"Project setup",
    Desc:"setupik",
    Priority:Priority.high,
    Owner:0,
    State:State.doing,
    Tasks:[1,2,3,4,5]

}
]

