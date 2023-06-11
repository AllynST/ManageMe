import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFuncComponent } from './project-func.component';

describe('ProjectFuncComponent', () => {
  let component: ProjectFuncComponent;
  let fixture: ComponentFixture<ProjectFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
