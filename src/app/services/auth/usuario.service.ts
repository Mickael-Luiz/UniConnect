import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UsuarioCreateInterface, UsuarioInterface } from '../../interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/public/usuario`;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<UsuarioInterface[]> {
    return this.http.get<UsuarioInterface[]>(this.apiUrl);
  }

  criarUsuario(usuario: UsuarioCreateInterface): Observable<UsuarioCreateInterface> {
    return this.http.post<UsuarioCreateInterface>(this.apiUrl, usuario);
  }
}
