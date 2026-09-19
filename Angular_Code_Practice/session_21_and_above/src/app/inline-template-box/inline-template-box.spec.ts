import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateBox } from './inline-template-box';

describe('InlineTemplateBox', () => {
  let component: InlineTemplateBox;
  let fixture: ComponentFixture<InlineTemplateBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTemplateBox],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineTemplateBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
