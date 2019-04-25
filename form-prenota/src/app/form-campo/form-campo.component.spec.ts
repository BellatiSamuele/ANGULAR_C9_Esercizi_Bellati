import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCampoComponent } from './form-campo.component';

describe('FormCampoComponent', () => {
  let component: FormCampoComponent;
  let fixture: ComponentFixture<FormCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
