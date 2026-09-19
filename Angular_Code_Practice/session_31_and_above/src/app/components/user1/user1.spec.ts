import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User1 } from './user1';

describe('User1', () => {
  let component: User1;
  let fixture: ComponentFixture<User1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User1],
    }).compileComponents();

    fixture = TestBed.createComponent(User1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
