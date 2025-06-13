import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterOptionsComponent } from './pages/register-options/register-options.component';
import { RegistroProfessorComponent } from './pages/register-options/registro-professor/registro-professor.component';
import { RegistroFaculdadeComponent } from './pages/register-options/registro-faculdade/registro-faculdade.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroAlunoComponent } from './pages/register-options/registro-aluno/registro-aluno.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/faculdade/dashboard/dashboard.component';
import { faculdadeGuard } from './guards/faculdade.guard';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'login', component: LoginComponent,
    // children: [
    //   {path: '', component: LoginOptionsComponent},
    //   {path: 'aluno', component: LoginAlunoComponent},
    //   {path: 'professor', component: LoginProfessorComponent},
    //   {path: 'faculdade', component: LoginFaculdadeComponent}
    // ]
  },
  {
    path: 'registrar', component: AuthLayoutComponent,
    children: [
      { path: '', component: RegisterOptionsComponent },
      { path: 'aluno', component: RegistroAlunoComponent },
      { path: 'professor', component: RegistroProfessorComponent },
      { path: 'faculdade', component: RegistroFaculdadeComponent },
    ]
  },
  {
    path: 'faculdade', canActivate: [faculdadeGuard], component: MainLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },

  { path: '**', redirectTo: '' }

];
