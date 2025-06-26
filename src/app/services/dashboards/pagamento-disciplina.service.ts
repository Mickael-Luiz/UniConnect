import { Injectable } from '@angular/core';
import { MOCK_PAGAMENTOS_DISCIPLINAS } from '../../mocks/mock-pagamentos-disciplinas';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoDisciplinaService {

  buscarPagamentosDisciplinas(disciplina: string): Observable<{label: string, valor: number, cor: string}[]> {
    const dados = MOCK_PAGAMENTOS_DISCIPLINAS[disciplina] || [];
    return of(dados).pipe(delay(500));
  }
}
