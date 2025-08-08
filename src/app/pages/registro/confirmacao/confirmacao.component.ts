import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/auth/usuario.service';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-confirmacao',
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    CommonModule,
    LoadingComponent,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent {

  formSenha!: FormGroup;
  senhaInvalida: boolean = false;
  mostrarSenha: boolean = false;
  token!: string
  loading = false

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
    private router: Router,
    private usuarioService: UsuarioService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
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

    this.usuarioService.confirmarUsuario({token: this.token, senha: this.formSenha.get('senha')?.value}).subscribe({
      next: response => {
        this.router.navigate(['/login'])
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuario criado com sucesso'})
      }, error: e => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: e})
      }
    }
    )
    
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
