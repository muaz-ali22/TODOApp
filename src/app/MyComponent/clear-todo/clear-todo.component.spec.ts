import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearTodoComponent } from './clear-todo.component';

describe('ClearTodoComponent', () => {
  let component: ClearTodoComponent;
  let fixture: ComponentFixture<ClearTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearTodoComponent]
    });
    fixture = TestBed.createComponent(ClearTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
