import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCurricularComponent } from './grade-curricular.component';

describe('GradeCurricularComponent', () => {
  let component: GradeCurricularComponent;
  let fixture: ComponentFixture<GradeCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCurricularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
