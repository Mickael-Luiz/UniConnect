import { Injectable } from '@angular/core';
import { MOCK_USERS } from '../../mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'usuario-logado';

  constructor() { }

  login(email: string): boolean {
    const user = MOCK_USERS.find(u => u.email == email);
    if(user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  getUsuario() {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  getPerfil() {
    const user = this.getUsuario();
    return user ? user.tipo : null;
  }

  isFaculdade() {
    return this.getPerfil() === 'FACULDADE';
  }

  isAluno() {
    return this.getPerfil() === 'ALUNO';
  }

  isProfessor() {
    return this.getPerfil() === 'PROFESSOR';
  }

  isLogado() {
    return !!this.getUsuario();
  }
}
