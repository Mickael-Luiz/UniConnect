import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-aluno',
  standalone: true,
  imports: [],
  templateUrl: './registro-aluno.component.html',
  styleUrl: './registro-aluno.component.scss'
})
export class RegistroAlunoComponent {

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
