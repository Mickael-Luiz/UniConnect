import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-curso',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ToggleButtonModule,
    ButtonModule,
    DialogModule
  ],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.scss'
})
export class ListaCursosComponent {

  formFiltro!: FormGroup;
  formAdd!: FormGroup;
  formAddVisible = false;

  // Filtros
  cursos = [
    { nome: 'Direito', modalidade: 'Presencial', cargaHoraria: 3600, status: 'Ativo', turmasAbertas: 3 },
    { nome: 'Administração', modalidade: 'EAD', cargaHoraria: 3000, status: 'Ativo', turmasAbertas: 2 },
    { nome: 'Odontologia', modalidade: 'Híbrido', cargaHoraria: 4000, status: 'Inativo', turmasAbertas: 0 },
    { nome: 'ADS', modalidade: 'EAD', cargaHoraria: 2800, status: 'Ativo', turmasAbertas: 4 },
    { nome: 'Pedagogia', modalidade: 'Presencial', cargaHoraria: 3600, status: 'Ativo', turmasAbertas: 4 },
    { nome: 'Ciência da Computação', modalidade: 'Híbrido', cargaHoraria: 3000, status: 'Ativo', turmasAbertas: 3 },
  ];

  modalidadesFiltro = [
    { label: 'Todas modalidades', value: '' },
    { label: 'Presencial', value: 'Presencial' },
    { label: 'EAD', value: 'EAD' },
    { label: 'Híbrido', value: 'Híbrido' }
  ];

  statusOptions = [
    { label: 'Todos status', value: '' },
    { label: 'Ativo', value: 'Ativo' },
    { label: 'Inativo', value: 'Inativo' }
  ];

  // Adicionar
  modalidades = [
    { label: 'Presencial', value: 'Presencial' },
    { label: 'EAD', value: 'EAD' },
    { label: 'Híbrido', value: 'Híbrido' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.formFiltro = this.fb.group({
      nome: [''],
      modalidade: [''],
      status: [''],
      viewAsCard: [true]
    })
    this.formAdd = this.fb.group({
      nome: ['', Validators.required],
      modalidade: ['', Validators.required],
      cargaHoraria: [null, Validators.required],
      coordenador: ['', Validators.required]
    })
  }

  get cursosFiltrados() {
    return this.cursos.filter(curso =>
      (!this.formFiltro.value.nome || curso.nome.toLowerCase().includes(this.formFiltro.value.nome.toLowerCase())) &&
      (!this.formFiltro.value.modalidade || curso.modalidade === this.formFiltro.value.modalidade) &&
      (!this.formFiltro.value.status || curso.status === this.formFiltro.value.status)
    );
  }

  get totalAtivos(): number {
    return this.cursosFiltrados.filter(c => c.status === 'Ativo').length;
  }

  get totalInativos(): number {
    return this.cursosFiltrados.filter(c => c.status === 'Inativo').length;
  }

  openModalAdd() {
    this.formAddVisible = true
  }

}
