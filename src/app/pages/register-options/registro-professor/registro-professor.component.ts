import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-registro-professor',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './registro-professor.component.html',
  styleUrl: './registro-professor.component.scss'
})
export class RegistroProfessorComponent {

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
