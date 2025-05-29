import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) {
    this.formUsuario = this.fb.group({
      email: ['', Validators.required],
      senha: [''],
      manterConectado: ['']
    })
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  logar(e: Event) {
    e.preventDefault()
    console.log(this.formUsuario.value);
    this.auth.login(this.formUsuario.value.email)
  }

}
