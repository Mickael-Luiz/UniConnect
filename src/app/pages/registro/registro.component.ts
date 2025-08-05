import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
  host: {
    class: 'w-full h-full'
  }
})
export class RegistroComponent {

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

}
