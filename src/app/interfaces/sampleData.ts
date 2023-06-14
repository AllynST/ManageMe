import { Functionality, Priority, State, Task, User,Permissions } from "./dataModels";

export const sampleUsers:User[] =[{
  
    id:0,
    Login:"AllynST",
    Password:"LosowyStringZnaków123@#",
    Email:"astrawpool@gmail.com",
    Name:"Allan",
    photoSrc:"https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic-300x286.png",
    Surname:"Strawpool",
    Permission: Permissions.admin
  }
]

export const sampleTasks:Task[] =[
{
    "id": 1,
    "Name": "Implement Login Feature",
    "Desc": "Implement the login functionality for the application",
    "Priority": Priority.medium,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-01T10:00:00Z"),
    "StartDate": new Date("2023-06-05T09:00:00Z"),
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": [0]
},
{
    "id": 2,
    "Name": "Update Database Schema",
    "Desc": "Modify the database schema to accommodate new requirements",
    "Priority": Priority.medium,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.todo,
    "AddedDate": new Date("2023-06-02T14:30:00Z"),
    "StartDate": null,
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": [0]
  },
  {
    "id": 3,
    "Name": "Implement User Registration",
    "Desc": "Add functionality for users to register an account",
    "Priority": Priority.high,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-03T09:45:00Z"),
    "StartDate": new Date("2023-06-06T11:00:00Z"),
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": [0]
  },
  {
    "id": 4,
    "Name": "Refactor Codebase",
    "Desc": "Optimize and improve the existing code structure",
    "Priority": Priority.very_low,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-04T13:15:00Z"),
    "StartDate": null,
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": [0]
  },
  {
    "id": 5,
    "Name": "Add Unit Tests",
    "Desc": "Write comprehensive unit tests for the application components",
    "Priority": Priority.urgent,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.doing,
    "AddedDate": new Date("2023-06-05T15:30:00Z"),
    "StartDate": new Date("2023-06-08T10:00:00Z"),
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": [0]
  },
  {
    "id": 6,
    "Name": "Optimize Performance",
    "Desc": "Improve the application's performance and response time",
    "Priority": Priority.urgent,
    "ExpTime": new Date("2023-06-01T10:00:00Z"),
    "State": State.todo,
    "AddedDate": new Date("2023-06-06T12:45:00Z"),
    "StartDate": null,
    "FinishDate": null,
    "OwnerID":0,
    "AssignedID": [0]
  },
]


export const sampleFunc : Functionality[] = [
{
  
    id:1,
    Name:"Project setup",
    Desc:"setupik",
    Priority:Priority.high,
    Owner:0,
    State:State.doing,
    Tasks:[...sampleTasks]

},
{
  
    id:2,
    Name:"Project setup",
    Desc:"setupik",
    Priority:Priority.high,
    Owner:0,
    State:State.doing,
    Tasks:[...sampleTasks]

},
{
  
    id:2,
    Name:"Project setup",
    Desc:"setupik",
    Priority:Priority.high,
    Owner:0,
    State:State.doing,
    Tasks:[...sampleTasks]

}
]

