import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth, public router: Router) { }
  // Recargar
  reload() {
    alert('Registro Exitoso!')
    location.reload();
  }

  // Función para iniciar sesión
  async login(email: string, pass: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, pass)
      .then(r => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(r.user));
        this.router.navigate(['/dashboard']);
      }).catch((error => {
        var code = error.code;
        var mensaje = error.message;
        console.log('Código: ' + code + ' Mensaje: ' + mensaje);
      }));
  }

  // Función para registrar usuarios
  async register(email: string, pass: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, pass)
      .then(r => {
        this.isLoggedIn = true,
          localStorage.setItem('user', JSON.stringify(r.user));
        this.router.navigate(['/dashboard']);
      }).catch((error => {
        var code = error.code;
        var mensaje = error.message;
        console.log('Código: ' + code + ' Mensaje: ' + mensaje);
      }));
  }

  // Función para cerrar sesión
  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    location.reload();
  }

  



}
