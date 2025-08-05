import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacao',
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent {

  formSenha!: FormGroup;
  senhaInvalida: boolean = false;
  mostrarSenha: boolean = false;

  senhaRegrasStatus = {
    minLength: false,
    number: false,
    upper: false,
    lower: false,
    special: false
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      console.log('token recebido: ', token);
    })
    this.formSenha = this.fb.group({
      senha: ['', [Validators.required, this.passwordValidator]],
      confirmarSenha: ['', Validators.required]
    });
    this.formSenha.get('senha')?.valueChanges.subscribe(senha => {
      this.atualizarValidacoesSenha(senha);
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const senha = control.value;
    if (!senha) return null;

    const regex = {
      minLength: /.{8,}/,
      number: /[0-9]/,
      upper: /[A-Z]/,
      lower: /[a-z]/,
      special: /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/']/
    };

    const valid =
      regex.minLength.test(senha) &&
      regex.number.test(senha) &&
      regex.upper.test(senha) &&
      regex.lower.test(senha) &&
      regex.special.test(senha);

    return valid ? null : { senhaInvalida: true };
  }

  criarSenha() {
    if (this.formSenha.invalid) {
      this.formSenha.markAllAsTouched();
      return;
    }

    const { senha, confirmarSenha } = this.formSenha.value;

    if (senha !== confirmarSenha) {
      this.senhaInvalida = true;
      return;
    }

    this.senhaInvalida = false;

    // Chamar backend para salvar a senha
    console.log('Senha válida e confirmada');
  }

  atualizarValidacoesSenha(senha: string) {
    this.senhaRegrasStatus = {
      minLength: senha.length >= 8,
      number: /\d/.test(senha),
      upper: /[A-Z]/.test(senha),
      lower: /[a-z]/.test(senha),
      special: /[!@#$%^&*(),.?":{}|<>_\-+=~`\[\]\\;'/]/.test(senha)
    };
  }

  alternarVisualizacaoSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

}
