import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { RegistroComponent } from './admin/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ListauserComponent } from './componentes/listauser/listauser.component';
import { PasswordComponent } from './componentes/password/password.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { ControlSidebarComponent } from './componentes/control-sidebar/control-sidebar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SettingComponent } from './componentes/setting/setting.component';
import { Page404Component } from './paginas/page404/page404.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    DashboardComponent,
    ListauserComponent,
    PasswordComponent,
    ContenidoComponent,
    ControlSidebarComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SettingComponent,
    Page404Component,
    CarruselComponent,
    InicioComponent,
    PropiedadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
