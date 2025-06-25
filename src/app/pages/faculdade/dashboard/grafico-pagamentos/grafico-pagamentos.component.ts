import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-pagamentos',
  imports: [],
  templateUrl: './grafico-pagamentos.component.html',
  styleUrl: './grafico-pagamentos.component.scss'
})
export class GraficoPagamentosComponent {

  disciplinas = [
    { nome: 'Geral', ativo: true },
    { nome: 'Direito', ativo: false },
    { nome: 'Odonto', ativo: false },
    { nome: 'ADS', ativo: false }
  ];

  dadosPorDisciplina: Record<string, { label: string, valor: number, cor: string }[]> = {
    'Geral': [
      { label: 'Cadastrados', valor: 120, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 100, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 10, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 10, cor: 'text-red-500' }
    ],
    'Direito': [
      { label: 'Cadastrados', valor: 80, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 60, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 5, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 15, cor: 'text-red-500' }
    ],
    'Odonto': [
      { label: 'Cadastrados', valor: 50, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 40, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 3, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 7, cor: 'text-red-500' }
    ],
    'ADS': [
      { label: 'Cadastrados', valor: 100, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 85, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 5, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 10, cor: 'text-red-500' }
    ]
  };

  pagamentos = this.dadosPorDisciplina['Geral'];

  selecionarDisciplina(nome: string) {
    this.disciplinas.forEach(d => d.ativo = d.nome === nome);
    this.pagamentos = this.dadosPorDisciplina[nome];
    console.log(`Disciplina selecionada: ${nome}`);
  }

}
