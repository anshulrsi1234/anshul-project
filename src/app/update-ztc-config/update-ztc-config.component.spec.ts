import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZtcConfigComponent } from './update-ztc-config.component';

describe('UpdateZtcConfigComponent', () => {
  let component: UpdateZtcConfigComponent;
  let fixture: ComponentFixture<UpdateZtcConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateZtcConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateZtcConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
