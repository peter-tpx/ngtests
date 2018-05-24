import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Devext01Component } from './devext01.component';

describe('Devext01Component', () => {
  let component: Devext01Component;
  let fixture: ComponentFixture<Devext01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Devext01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Devext01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
