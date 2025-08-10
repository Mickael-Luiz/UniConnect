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

  criarUsuarioPF(usuario: UsuarioPFCreateInterface): Observable<UsuarioPFCreateInterface> {
    return this.http.post<UsuarioPFCreateInterface>(`${this.apiUrl}/usuario-pf`, usuario);
  }
  
  criarUsuarioPJ(usuario: UsuarioPJCreateInterface): Observable<UsuarioPJCreateInterface> {
    return this.http.post<UsuarioPJCreateInterface>(`${this.apiUrl}/usuario-pj`, usuario);
  }

  confirmarUsuario(confirmacao: ConfirmarSenhaInterface) {
    return this.http.post<UsuarioInterface>(`${this.apiUrl}/usuario/confirmar-senha`, confirmacao)
  }
}
