import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTodoComponent } from './home-todo.component';

describe('HomeTodoComponent', () => {
  let component: HomeTodoComponent;
  let fixture: ComponentFixture<HomeTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
