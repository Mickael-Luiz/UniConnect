import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CriarUsuarioService } from '../../../services/auth/criar-usuario.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from '../../../shared/loading/loading.component';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    LoadingComponent
  ],
  providers: [MessageService],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.scss'
})
export class RegistroUsuarioComponent {

  formUser!: FormGroup
  loading = false

  constructor(
    private router: Router,
    private createService: CriarUsuarioService,
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
      this.loading = true;
      this.createService.criarUsuarioPF(this.formUser.value).subscribe({
        next: response => {
          this.router.navigate(['registrar/aviso-email'])
          this.loading = false
        }, error: e => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Falha ao criar perfil: ' + e });
          this.loading = false
        }
      })
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
