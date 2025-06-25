import { Component } from '@angular/core';
import { LinhaMatriculaComponent } from "./matricula-disciplinas/matricula-disciplinas.component";
import { GraficoPagamentosComponent } from './grafico-pagamentos/grafico-pagamentos.component';
import { FluxoFinanceiroComponent } from "./fluxo-financeiro/fluxo-financeiro.component";

@Component({
  selector: 'app-dashboard',
  imports: [LinhaMatriculaComponent, GraficoPagamentosComponent, FluxoFinanceiroComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
