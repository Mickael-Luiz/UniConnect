import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginAlunoComponent } from './pages/login-options/login-aluno/login-aluno.component';
import { LoginProfessorComponent } from './pages/login-options/login-professor/login-professor.component';
import { LoginFaculdadeComponent } from './pages/login-options/login-faculdade/login-faculdade.component';
import { LoginOptionsComponent } from './pages/login-options/login-options.component';
import { RegisterOptionsComponent } from './pages/register-options/register-options.component';
import { RegistroProfessorComponent } from './pages/register-options/registro-professor/registro-professor.component';
import { RegistroFaculdadeComponent } from './pages/register-options/registro-faculdade/registro-faculdade.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'login', children: [
      {path: '', component: LoginOptionsComponent},
      {path: 'aluno', component: LoginAlunoComponent},
      {path: 'professor', component: LoginProfessorComponent},
      {path: 'faculdade', component: LoginFaculdadeComponent}
    ]
  },
  {
    path: 'registro',
    children: [
      {path: '', component: RegisterOptionsComponent},
      {path: 'aluno', component: LoginAlunoComponent},
      {path: 'professor', component: RegistroProfessorComponent},
      {path: 'faculdade', component: RegistroFaculdadeComponent},
    ]
  }

];
