import { Injectable } from '@angular/core';
import { MOCK_USERS } from '../../mocks/mock-users';
import { environment } from '../../../environments/environment';
import { LoginRequestInterface } from '../../interfaces/LoginRequestInterface';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponseInterface } from '../../interfaces/LoginResponseInterface';

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

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
