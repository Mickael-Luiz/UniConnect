import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCursoComponent } from './analise-curso.component';

describe('AnaliseCursoComponent', () => {
  let component: AnaliseCursoComponent;
  let fixture: ComponentFixture<AnaliseCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
