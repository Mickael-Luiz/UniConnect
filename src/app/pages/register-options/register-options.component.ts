import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-options',
  standalone: true,
  imports: [],
  templateUrl: './register-options.component.html',
  styleUrl: './register-options.component.scss',
  host: {
    class: 'w-full h-full'
  }
})
export class RegisterOptionsComponent {

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

}
