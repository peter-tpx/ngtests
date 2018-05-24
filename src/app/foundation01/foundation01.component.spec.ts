import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foundation01Component } from './foundation01.component';

describe('Foundation01Component', () => {
  let component: Foundation01Component;
  let fixture: ComponentFixture<Foundation01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foundation01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foundation01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
