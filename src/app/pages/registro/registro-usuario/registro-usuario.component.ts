import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UsuarioService } from '../../../services/auth/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [
    ButtonModule,
    ToastModule,
    ReactiveFormsModule
  ],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.scss'
})
export class RegistroUsuarioComponent {

  formUser!: FormGroup

  constructor(
    private router: Router,
    private userService: UsuarioService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.formUser = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  criarUsuario() {
    if (this.formUser.valid) {
      this.userService.criarUsuario(this.formUser.value).subscribe({
        next: response => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuario temporario criado com Sucesso' });
        }, error: e => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Falha ao criar usuario: ' + e });
        }
      })
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
