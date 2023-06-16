import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  
  constructor(private authService:AuthService,private router:Router) { 
   
   }

   form = new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
   })

   submit(){
    if(this.authService.login(this.form.value.username,this.form.value.password)){
      this.router.navigate(['/Projets']);
    }
    else{
      alert("wrong password")
    }
   }
   
  ngOnInit(): void {
   }
}
