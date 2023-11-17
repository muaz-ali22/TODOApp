import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTextComponent } from './side-text.component';

describe('SideTextComponent', () => {
  let component: SideTextComponent;
  let fixture: ComponentFixture<SideTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideTextComponent]
    });
    fixture = TestBed.createComponent(SideTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
