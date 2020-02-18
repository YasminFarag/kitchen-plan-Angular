import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { modalDialogComponent } from './modal-dialog.component';

describe('DialogExampleComponent', () => {
  let component: modalDialogComponent;
  let fixture: ComponentFixture<modalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ modalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(modalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
