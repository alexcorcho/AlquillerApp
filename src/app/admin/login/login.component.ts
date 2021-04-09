import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from "./services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>() 
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  onSignUp(email : string, pass : string){
    this.firebaseService.login(email, pass);
  }

  logout(){
    this.firebaseService.logout();
  }

}
