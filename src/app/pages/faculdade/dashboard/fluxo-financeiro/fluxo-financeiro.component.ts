import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-fluxo-financeiro',
  imports: [],
  templateUrl: './fluxo-financeiro.component.html',
  styleUrl: './fluxo-financeiro.component.scss'
})
export class FluxoFinanceiroComponent {

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Previsto',
            data: [10000, 12000, 11000, 15000, 14000, 13000],
            backgroundColor: 'rgba(54, 162, 235, 0.7)'
          },
          {
            label: 'Recebido',
            data: [9500, 11500, 10500, 14000, 13000, 12500],
            backgroundColor: 'rgba(255, 99, 132, 0.7)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Valor Mensalidades'
            },
            beginAtZero: true
          }
        }
      }
    });
  }

}
