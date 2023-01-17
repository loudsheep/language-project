import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTreeComponent } from './learning-tree.component';

describe('LearningTreeComponent', () => {
  let component: LearningTreeComponent;
  let fixture: ComponentFixture<LearningTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
