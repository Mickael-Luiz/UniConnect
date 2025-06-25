import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaMatriculaComponent } from './matricula-disciplinas.component';

describe('LinhaMatriculaComponent', () => {
  let component: LinhaMatriculaComponent;
  let fixture: ComponentFixture<LinhaMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinhaMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
