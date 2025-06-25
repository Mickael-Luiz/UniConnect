import { Component } from '@angular/core';
import { LinhaMatriculaComponent } from "./matricula-disciplinas/matricula-disciplinas.component";

@Component({
  selector: 'app-dashboard',
  imports: [LinhaMatriculaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
