import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/interfaces/dataModels';
import { NgOptimizedImage } from '@angular/common'
declare const require:any

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  protected user$!: Observable<User | undefined> 

  id!:number

  

  constructor(private service:UserService,private route : ActivatedRoute){

  }

  ngOnInit(){
    
    
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.user$ = this.service.getUser(this.id)
  }
 

  
}
