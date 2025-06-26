import { Component, AfterViewInit  } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-matricula-disciplinas',
  imports: [],
  templateUrl: './matricula-disciplinas.component.html',
  styleUrl: './matricula-disciplinas.component.scss'
})
export class LinhaMatriculaComponent implements AfterViewInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Direito',
            data: [10, 20, 15, 60, 25, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'Odonto',
            data: [18,13,40,87,60,64],
            borderColor: 'rgba(192, 75, 192, 1)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'ADS',
            data: [18,40,52,25,27,32],
            borderColor: 'rgba(192, 192, 75, 1)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'Administração',
            data: [30,55,22,40,18,31],
            borderColor: 'rgba(152, 152, 172, 1)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'Pedagogia',
            data: [14,23,34,25,42,45],
            borderColor: 'rgba(20, 155, 20, 1)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'Ciência da Computação',
            data: [31,24,36,48,50,38],
            borderColor: 'rgba(152, 120, 0, 1)',
            fill: false,
            tension: 0.1
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Mês'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Matrículas'
            },
            beginAtZero: true
          }
        }
      }
    };

    new Chart(
      document.getElementById('lineChartMatriculas') as HTMLCanvasElement,
      config
    );
  }
  
}
