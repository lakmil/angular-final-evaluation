import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rc2Component } from './rc2.component';

describe('Rc2Component', () => {
  let component: Rc2Component;
  let fixture: ComponentFixture<Rc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
