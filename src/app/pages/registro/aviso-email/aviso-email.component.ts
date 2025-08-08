import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-aviso-email',
  imports: [ButtonModule],
  templateUrl: './aviso-email.component.html',
  styleUrl: './aviso-email.component.scss'
})
export class AvisoEmailComponent {

  email = 'usuario@exemplo.com';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path])
  }

}
