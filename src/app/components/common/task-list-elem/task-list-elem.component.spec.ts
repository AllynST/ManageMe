import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListElemComponent } from './task-list-elem.component';

describe('TaskListElemComponent', () => {
  let component: TaskListElemComponent;
  let fixture: ComponentFixture<TaskListElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListElemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
