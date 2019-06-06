import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StbztcoverrideComponent } from './stbztcoverride.component';

describe('StbztcoverrideComponent', () => {
  let component: StbztcoverrideComponent;
  let fixture: ComponentFixture<StbztcoverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StbztcoverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StbztcoverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
