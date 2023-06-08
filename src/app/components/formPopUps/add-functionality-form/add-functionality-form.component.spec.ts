import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFunctionalityFormComponent } from './add-functionality-form.component';

describe('AddFunctionalityFormComponent', () => {
  let component: AddFunctionalityFormComponent;
  let fixture: ComponentFixture<AddFunctionalityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFunctionalityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFunctionalityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
