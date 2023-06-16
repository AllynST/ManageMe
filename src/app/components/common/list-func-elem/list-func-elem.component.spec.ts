import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuncElemComponent } from './list-func-elem.component';

describe('ListFuncElemComponent', () => {
  let component: ListFuncElemComponent;
  let fixture: ComponentFixture<ListFuncElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFuncElemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFuncElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
