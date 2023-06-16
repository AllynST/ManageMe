import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectService } from './project-service.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  private currentProject : BehaviorSubject<number|null> = new BehaviorSubject<number|null>(1);    

  private currentProject$ : Observable<number|null> = this.currentProject.asObservable()

  constructor(private projectService:ProjectService) { 
    
  }

  getCurrent(){
    return this.currentProject$;
  }

  switchCurrent(targetNum:number){    
      this.currentProject.next(targetNum)
  }
}
