import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-faculdade',
  standalone: true,
  imports: [],
  templateUrl: './registro-faculdade.component.html',
  styleUrl: './registro-faculdade.component.scss',
  host: {
    class: 'w-full h-full block'
  }
})
export class RegistroFaculdadeComponent {

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
