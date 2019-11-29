import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunToolsComponent } from './run-tools.component';

describe('RunToolsComponent', () => {
  let component: RunToolsComponent;
  let fixture: ComponentFixture<RunToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
