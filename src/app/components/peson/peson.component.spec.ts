import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonComponent } from './peson.component';

describe('PesonComponent', () => {
  let component: PesonComponent;
  let fixture: ComponentFixture<PesonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
