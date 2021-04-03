import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rc1Component } from './rc1.component';

describe('Rc1Component', () => {
  let component: Rc1Component;
  let fixture: ComponentFixture<Rc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
