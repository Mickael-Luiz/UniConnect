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
    { nome: 'ADS', ativo: false },
    { nome: 'Pedagogia', ativo: false },
    { nome: 'Ciência da Computação', ativo: false }
  ];

  dadosPorDisciplina: Record<string, { label: string, valor: number, cor: string }[]> = {
    'Geral': [
      { label: 'Esperados', valor: 120, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 100, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 10, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 10, cor: 'text-red-500' }
    ],
    'Direito': [
      { label: 'Esperados', valor: 80, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 60, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 5, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 15, cor: 'text-red-500' }
    ],
    'Odonto': [
      { label: 'Esperados', valor: 50, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 40, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 3, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 7, cor: 'text-red-500' }
    ],
    'ADS': [
      { label: 'Esperados', valor: 100, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 85, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 5, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 10, cor: 'text-red-500' }
    ],
    'Pedagogia': [
      { label: 'Esperados', valor: 65, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 58, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 2, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 5, cor: 'text-red-500' }
    ],
    'Ciência da Computação': [
      { label: 'Esperados', valor: 76, cor: 'text-blue-600' },
      { label: 'Em dia', valor: 70, cor: 'text-green-600' },
      { label: 'Adiantados', valor: 4, cor: 'text-yellow-500' },
      { label: 'Atrasados', valor: 2, cor: 'text-red-500' }
    ]
  };

  pagamentos = this.dadosPorDisciplina['Geral'];

  selecionarDisciplina(nome: string) {
    this.disciplinas.forEach(d => d.ativo = d.nome === nome);
    this.pagamentos = this.dadosPorDisciplina[nome];
    console.log(`Disciplina selecionada: ${nome}`);
  }

}
