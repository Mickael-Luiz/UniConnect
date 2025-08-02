import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.scss'
})
export class LeftbarComponent {

  perfil: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.perfil = this.auth.getPerfil();
  }

  logout() {
    this.auth.logout();
    this.router.navigate([''])
  }

}
