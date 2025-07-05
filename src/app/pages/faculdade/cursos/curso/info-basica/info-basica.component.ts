import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-info-basica',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule
  ],
  templateUrl: './info-basica.component.html',
  styleUrl: './info-basica.component.scss'
})
export class InfoBasicaComponent {

  form!: FormGroup;

  curso = {
    id: 1, nome: 'Ciência da Computação', modalidade: 'Presencial',
    cargaHoraria: 3600, coordenador: 'Lídia Martins',
    proponente: 'Mickael Luiz', status: 'Ativo'
  }

  modalidades = [
    { label: 'Presencial', value: 'Presencial' },
    { label: 'EAD', value: 'EAD' },
    { label: 'Híbrido', value: 'Híbrido' },
  ];

  statusOptions = [
    { label: 'Ativo', value: 'Ativo' },
    { label: 'Inativo', value: 'Inativo' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''],
      modalidade: [''],
      cargaHoraria: [''],
      coordenador: [''],
      proponente: [''],
      status: ['']
    });
  }

  ngOnInit() {
    if (this.curso) {
      this.form.patchValue(this.curso);
    }
    this.disableCampos();
  }

  disableCampos() {
    this.form.get('proponente')?.disable();
    this.form.get('status')?.disable();
  }

}
