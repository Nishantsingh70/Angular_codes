import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setting1 } from './setting1';

describe('Setting1', () => {
  let component: Setting1;
  let fixture: ComponentFixture<Setting1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setting1],
    }).compileComponents();

    fixture = TestBed.createComponent(Setting1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
