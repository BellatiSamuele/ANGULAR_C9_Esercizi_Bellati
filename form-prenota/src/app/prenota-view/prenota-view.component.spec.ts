import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotaViewComponent } from './prenota-view.component';

describe('PrenotaViewComponent', () => {
  let component: PrenotaViewComponent;
  let fixture: ComponentFixture<PrenotaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
