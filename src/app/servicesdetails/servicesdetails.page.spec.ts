import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesdetailsPage } from './servicesdetails.page';

describe('ServicesdetailsPage', () => {
  let component: ServicesdetailsPage;
  let fixture: ComponentFixture<ServicesdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
