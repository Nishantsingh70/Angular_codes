import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivendemoComponent } from './modeldrivendemo.component';

describe('ModeldrivendemoComponent', () => {
  let component: ModeldrivendemoComponent;
  let fixture: ComponentFixture<ModeldrivendemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeldrivendemoComponent]
    });
    fixture = TestBed.createComponent(ModeldrivendemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
