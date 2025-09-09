import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNewTask } from './input-new-task';

describe('InputNewTask', () => {
  let component: InputNewTask;
  let fixture: ComponentFixture<InputNewTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNewTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNewTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
