import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CriarUsuarioService } from '../../../services/auth/criar-usuario.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from '../../../shared/loading/loading.component';

@Component({
  selector: 'app-registro-faculdade',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    LoadingComponent
  ],
  providers: [MessageService],
  templateUrl: './registro-faculdade.component.html',
  styleUrl: './registro-faculdade.component.scss',
  // host: {
  //   class: 'w-full h-full block'
  // }
})
export class RegistroFaculdadeComponent {

  formFaculdade!: FormGroup
  loading = false

  constructor(
    private router: Router,
    private createService: CriarUsuarioService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.formFaculdade = this.fb.group({
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  criarUsuario() {
    if (this.formFaculdade.valid) {
      this.loading = true;
      this.createService.criarUsuarioPJ(this.formFaculdade.value).subscribe({
        next: response => {
          this.router.navigate(['registrar/aviso-email'])
          this.loading = false
        }, error: e => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Falha ao criar usuario: ' + e });
          this.loading = false
        }
      })
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
