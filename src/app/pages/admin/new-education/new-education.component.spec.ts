import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEducationComponent } from './new-education.component';

describe('NewEducationComponent', () => {
  let component: NewEducationComponent;
  let fixture: ComponentFixture<NewEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEducationComponent]
    });
    fixture = TestBed.createComponent(NewEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
