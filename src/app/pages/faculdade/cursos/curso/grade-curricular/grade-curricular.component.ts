import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { AccordionModule } from 'primeng/accordion';
import { MultiSelectModule } from 'primeng/multiselect';
import { SemestreInterface } from '../../../../../interfaces/SemestreInterface';
import { DisciplinaSelecionadaInterface } from '../../../../../interfaces/DisciplinaInterface';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-grade-curricular',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    MultiSelectModule
  ],
  templateUrl: './grade-curricular.component.html',
  styleUrl: './grade-curricular.component.scss'
})
export class GradeCurricularComponent {

  semestres: SemestreInterface[] = []
  contadorSemestre = 0
  contadorDisciplina = 0

  adicionarSemestre() {
    const novoSemestre: SemestreInterface = {
      id: ++this.contadorSemestre,
      disciplinas: []
    };

    this.semestres.push(novoSemestre);
  }

  adicionarDisciplina(indexSemestre: number) {
    const semestre = this.semestres.find(s => s.id === indexSemestre);
    if (!semestre) return;

    const novaDisciplina: DisciplinaSelecionadaInterface = {
      disciplina: {
        id: ++this.contadorDisciplina,
        titulo: 'Disciplina ' + this.contadorDisciplina,
        cargaHoraria: 0
      },
      professor: '',
      diaSemana: '',
      horarios: []
    };

    semestre.disciplinas.push(novaDisciplina)
  }

  visualizarSemestre() {
    console.log(this.semestres);
  }

}
