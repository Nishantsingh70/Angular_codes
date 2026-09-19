import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile1 } from './profile1';

describe('Profile1', () => {
  let component: Profile1;
  let fixture: ComponentFixture<Profile1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profile1],
    }).compileComponents();

    fixture = TestBed.createComponent(Profile1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
