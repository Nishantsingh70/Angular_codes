import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivendemoComponent } from './templatedrivendemo.component';

describe('TemplatedrivendemoComponent', () => {
  let component: TemplatedrivendemoComponent;
  let fixture: ComponentFixture<TemplatedrivendemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatedrivendemoComponent]
    });
    fixture = TestBed.createComponent(TemplatedrivendemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
