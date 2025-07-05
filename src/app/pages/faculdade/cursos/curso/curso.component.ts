import { Component } from '@angular/core';
import { InfoBasicaComponent } from './info-basica/info-basica.component';
import { GradeCurricularComponent } from './grade-curricular/grade-curricular.component';
import { DocentesComponent } from './docentes/docentes.component';
import { TurmasComponent } from './turmas/turmas.component';
import { AnaliseCursoComponent } from './analise-curso/analise-curso.component';

import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  imports: [
    InfoBasicaComponent,
    GradeCurricularComponent,
    DocentesComponent,
    TurmasComponent,
    AnaliseCursoComponent,
    ButtonModule,
    StepperModule
  ],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent {

  constructor(private router: Router) {}

  navigateListaCursos() {
    this.router.navigate(['/faculdade/cursos'])
  }

  concluir() {
    window.alert('Curso Preenchido com sucesso!\n Assim que o curso for ativado, avisaremos a você.')
  }

}
