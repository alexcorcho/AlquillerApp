import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './admin/login/login.component';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { RegistroComponent } from './admin/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { ControlSidebarComponent } from './componentes/control-sidebar/control-sidebar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListauserComponent } from './componentes/listauser/listauser.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PasswordComponent } from './componentes/password/password.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';
import { PublicaComponent } from './componentes/publica/publica.component';
import { SettingComponent } from './componentes/setting/setting.component';
import { ArriendoComponent } from './paginas/arriendo/arriendo.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { Page404Component } from './paginas/page404/page404.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    PublicaComponent,
    ArriendoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
