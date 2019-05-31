import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetztcdetailComponent } from './getztcdetail.component';

describe('GetztcdetailComponent', () => {
  let component: GetztcdetailComponent;
  let fixture: ComponentFixture<GetztcdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetztcdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetztcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
