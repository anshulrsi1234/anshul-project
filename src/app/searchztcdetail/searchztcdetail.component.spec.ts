import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchztcdetailComponent } from './searchztcdetail.component';

describe('SearchztcdetailComponent', () => {
  let component: SearchztcdetailComponent;
  let fixture: ComponentFixture<SearchztcdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchztcdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchztcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
