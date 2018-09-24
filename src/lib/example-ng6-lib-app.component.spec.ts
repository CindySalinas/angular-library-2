import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNg6LibAppComponent } from './example-ng6-lib-app.component';

describe('ExampleNg6LibAppComponent', () => {
  let component: ExampleNg6LibAppComponent;
  let fixture: ComponentFixture<ExampleNg6LibAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNg6LibAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNg6LibAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
