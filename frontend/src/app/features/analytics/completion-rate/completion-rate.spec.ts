import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionRate } from './completion-rate';

describe('CompletionRate', () => {
  let component: CompletionRate;
  let fixture: ComponentFixture<CompletionRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletionRate],
    }).compileComponents();

    fixture = TestBed.createComponent(CompletionRate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
