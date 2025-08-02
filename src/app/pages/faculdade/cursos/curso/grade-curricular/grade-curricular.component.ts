import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { AccordionModule } from 'primeng/accordion';
import { MultiSelectModule } from 'primeng/multiselect';
import { SemestreInterface } from '../../../../../interfaces/SemestreInterface';
import { DisciplinaInterface, DisciplinaSelecionadaInterface } from '../../../../../interfaces/DisciplinaInterface';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { UsuarioInterface } from '../../../../../interfaces/UsuarioInterface';

@Component({
  selector: 'app-grade-curricular',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    MultiSelectModule,
    AutoCompleteModule
  ],
  templateUrl: './grade-curricular.component.html',
  styleUrl: './grade-curricular.component.scss'
})
export class GradeCurricularComponent {

  formDisciplina!: FormGroup

  semestres: SemestreInterface[] = []
  contadorSemestre = 0
  contadorDisciplina = 0

  disciplinas: DisciplinaInterface[] = [
    { id: 1, titulo: 'Lógica Matemática', cargaHoraria: 90 },
    { id: 2, titulo: 'POO', cargaHoraria: 120 },
    { id: 3, titulo: 'Estrutura De Dados', cargaHoraria: 90 },
    { id: 4, titulo: 'Engenharia de Software', cargaHoraria: 60 }
  ]

  professores: UsuarioInterface[] = [
    { id: 1, nome: 'Ed Wilson Júnior', email: 'edificio@gmail.com' },
    { id: 2, nome: 'Gleiciane da Silva', email: 'gleicinha@gmail.com' },
    { id: 3, nome: 'David Padilha', email: 'padilhatopatudo@gmail.com' },
    { id: 4, nome: 'Professor Exemplo', email: 'profexample@gmail.com' }
  ]

  diasSemana: { value: number, label: string }[] = [
    {value: 2, label: 'Segunda'},
    {value: 3, label: 'Terça'},
    {value: 4, label: 'Quarta'},
    {value: 5, label: 'Quinta'},
    {value: 6, label: 'Sexta'},
    {value: 7, label: 'Sábado'},
  ]

  horariosAgrupados = [
  {
    label: 'Manhã',
    items: [
      { label: '1º Horário (07:00 - 07:50)', value: 'manha1' },
      { label: '2º Horário (07:50 - 08:40)', value: 'manha2' },
      { label: '3º Horário (08:40 - 09:30)', value: 'manha3' },
      { label: '4º Horário (09:50 - 10:40)', value: 'manha4' },
      { label: '5º Horário (10:40 - 11:30)', value: 'manha5' }
    ]
  },
  {
    label: 'Tarde',
    items: [
      { label: '1º Horário (13:00 - 13:50)', value: 'tarde1' },
      { label: '2º Horário (13:50 - 14:40)', value: 'tarde2' },
      { label: '3º Horário (14:40 - 15:30)', value: 'tarde3' },
      { label: '4º Horário (15:50 - 16:40)', value: 'tarde4' },
      { label: '5º Horário (16:40 - 17:30)', value: 'tarde5' }
    ]
  },
  {
    label: 'Noite',
    items: [
      { label: '1º Horário (18:30 - 19:20)', value: 'noite1' },
      { label: '2º Horário (19:20 - 20:10)', value: 'noite2' },
      { label: '3º Horário (20:30 - 21:20)', value: 'noite3' },
      { label: '4º Horário (21:20 - 22:10)', value: 'noite4' }
    ]
  }
];

  disciplinasFiltradas: DisciplinaInterface[] = [];
  professoresFiltrados: UsuarioInterface[] = []

  constructor(private fb: FormBuilder) {
    this.formDisciplina = this.fb.group({
      disciplina: [null],
      professor: [null],
      diaSemana: [''],
      horarios: [[]]
    })
  }

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

  filtrarDisciplinas(query: string) {
    query = query.toLowerCase();
    this.disciplinasFiltradas = this.disciplinas.filter(d =>
      d.titulo.toLowerCase().includes(query)
    );
  }

  filtrarProfessores(query: string) {
    if(!(query.length > 1)) return;
    query = query.toLowerCase();
    this.professoresFiltrados = this.professores.filter(p =>
      p.nome.toLowerCase().includes(query)
    );
  }

}
