import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent} from './componentes/dashboard/dashboard.component';
import { PasswordComponent} from './componentes/password/password.component';
import { RegistroComponent } from './admin/registro/registro.component';
import { Page404Component } from './paginas/page404/page404.component';
import { InicioComponent } from './paginas/inicio/inicio.component'
import { ArriendoComponent } from './paginas/arriendo/arriendo.component'


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path:"arriendo",component:ArriendoComponent },
  { path:"inicio",component:InicioComponent },
  { path: "admin/perfil", component: PerfilComponent },
  { path: "login", component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: "recover", component: PasswordComponent },
  { path: "registro", component: RegistroComponent },
  { path: "**", component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
