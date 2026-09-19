import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleBox } from './inline-style-box';

describe('InlineStyleBox', () => {
  let component: InlineStyleBox;
  let fixture: ComponentFixture<InlineStyleBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineStyleBox],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineStyleBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
