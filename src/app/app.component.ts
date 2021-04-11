import { Component } from '@angular/core';
import { FirebaseService } from "./services/firebase.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alquiler-app';
  isSignedIn = false;
  constructor (public firebaseService : FirebaseService) {}
  // Función para validar si existe un usuario activo
  ngOnImit(){
    if(localStorage.getItem('user') != null){
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  // INICIAR
  async onSignUp(email : string, pass : string){
    await this.firebaseService.login(email, pass)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  // Logout
  handLeLogout(){
    this.isSignedIn = false;
  }



}
