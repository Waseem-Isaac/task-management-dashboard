import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSelectField } from './icon-select-field';

describe('IconSelectField', () => {
  let component: IconSelectField;
  let fixture: ComponentFixture<IconSelectField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSelectField],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSelectField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
