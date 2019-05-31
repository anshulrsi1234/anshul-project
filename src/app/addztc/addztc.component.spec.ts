import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddztcComponent } from './addztc.component';

describe('AddztcComponent', () => {
  let component: AddztcComponent;
  let fixture: ComponentFixture<AddztcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddztcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddztcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
