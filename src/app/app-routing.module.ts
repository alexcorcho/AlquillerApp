import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent} from './componentes/dashboard/dashboard.component';
import { PasswordComponent} from './componentes/password/password.component';
import { RegistroComponent } from './admin/registro/registro.component';
import { Page404Component } from './paginas/page404/page404.component';


const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "admin/perfil", component: PerfilComponent },
  { path: "admin/login", component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: "recover", component: PasswordComponent },
  { path: "register", component: RegistroComponent },
  { path: "**", component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
