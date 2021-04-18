import { Injectable, NgZone } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private _apiLocalURL = '../../assets/API-CORCHO/API_LOCAL.json';
  constructor(private Http: HttpClient, public firebaseAuth: AngularFireAuth, public router: Router) { }

  getJson(): Observable <any>{
    return this.Http.get(this._apiLocalURL );
  }


  // Función del observador
  observer() {
    var currentUser = localStorage.getItem('user');
    (currentUser != null) ? this.router.navigate(['/dashboard']) : this.router.navigate(['/admin/login']);
    this.firebaseAuth.onAuthStateChanged((user) => {
      if(user){
        
      }
    });    
  }

}
