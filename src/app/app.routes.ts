import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RegistroFaculdadeComponent } from './pages/registro/registro-faculdade/registro-faculdade.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/faculdade/dashboard/dashboard.component';
import { faculdadeGuard } from './guards/faculdade.guard';
import { ListaCursosComponent } from './pages/faculdade/cursos/lista-cursos/lista-cursos.component';
import { CursoComponent } from './pages/faculdade/cursos/curso/curso.component';
import { RegistroUsuarioComponent } from './pages/registro/registro-usuario/registro-usuario.component';
import { ConfirmacaoComponent } from './pages/registro/confirmacao/confirmacao.component';
import { AvisoEmailComponent } from './pages/registro/aviso-email/aviso-email.component';

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
      { path: '', component: RegistroComponent },
      { path: 'usuario', component: RegistroUsuarioComponent },
      { path: 'faculdade', component: RegistroFaculdadeComponent },
      { path: 'confirmar', component: ConfirmacaoComponent },
      { path: 'aviso-email', component: AvisoEmailComponent}
    ]
  },
  {
    path: 'faculdade', canActivate: [faculdadeGuard], component: MainLayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cursos', component: ListaCursosComponent},
      { path: 'curso/:id', component: CursoComponent}
    ]
  },

  { path: '**', redirectTo: '' }

];
