import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConfirmarSenhaInterface, UsuarioPFCreateInterface, UsuarioInterface, UsuarioPJCreateInterface } from '../../interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class CriarUsuarioService {
  private apiUrl = `${environment.apiUrl}/public`;

  constructor(private http: HttpClient) {}

  criarUsuarioPF(usuario: UsuarioPFCreateInterface): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/criar-usuario-pf`, usuario);
  }
  
  criarUsuarioPJ(usuario: UsuarioPJCreateInterface): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/create/usuario-pj`, usuario);
  }

  confirmarUsuario(confirmacao: ConfirmarSenhaInterface) {
    return this.http.post<UsuarioInterface>(`${this.apiUrl}/confirmar-usuario-pf`, confirmacao)
  }
}
