/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabelItemComponent } from './label-item.component';

describe('LabelItemComponent', () => {
  let component: LabelItemComponent;
  let fixture: ComponentFixture<LabelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
