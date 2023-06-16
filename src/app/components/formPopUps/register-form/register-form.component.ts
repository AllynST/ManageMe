import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { Permissions, User } from 'src/app/interfaces/dataModels';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(private userService:AuthService,private router:Router){

  }
  registerForm = new FormGroup({    
    id: new FormControl(Date.now()),
    Login:new FormControl(''),
    Password:new FormControl(''),
    Email:new FormControl(''),
    Name:new FormControl(''),
    Surname:new FormControl(''),
    photoSrc:new FormControl(''),
    Permission:new FormControl(Permissions.developer)
    })

    submitHandler(){
      this.userService.register(this.registerForm.value as User)
      this.router.navigate(['']);
    }
}
