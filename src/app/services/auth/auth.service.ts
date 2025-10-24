import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginRequestInterface } from '../../interfaces/LoginRequestInterface';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponseInterface } from '../../interfaces/LoginResponseInterface';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  sub: string;
  tipoUsuario: 'PF' | 'PJ';
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/public`;

  // private readonly storageKey = 'usuario-logado';

  constructor(private http: HttpClient) { }

  login(request: LoginRequestInterface): Observable<LoginResponseInterface> {

    return this.http.post<LoginResponseInterface>(`${this.apiUrl}/login`, request)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserType(): 'PF' | 'PJ' | null {
    const token = this.getToken()
    if(!token) return null;

    const decoded = jwtDecode<TokenPayload>(token);
    return decoded.tipoUsuario;
  }

  isUserType(tipo: 'PF' | 'PJ'): boolean {
    return this.getUserType() === tipo;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
