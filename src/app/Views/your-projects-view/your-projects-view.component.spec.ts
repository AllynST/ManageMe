import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProjectsViewComponent } from './your-projects-view.component';

describe('YourProjectsViewComponent', () => {
  let component: YourProjectsViewComponent;
  let fixture: ComponentFixture<YourProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourProjectsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
