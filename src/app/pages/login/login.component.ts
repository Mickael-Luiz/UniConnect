import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formUsuario: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.formUsuario = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  logar() {
    if (this.formUsuario.valid) {
      this.auth.login(this.formUsuario.value).subscribe({
        next: response => {
          this.messageService.add({ severity: 'success', summary: 'Usuário Confirmado', detail: 'Seja Bem Vindo(a)'})
        }, error: e => {
          this.messageService.add({ severity: 'error', summary: 'Falha ao Confirmar Usuário', detail: 'Verifique seu email e senha'})
        }
      })
    }
  }

}
