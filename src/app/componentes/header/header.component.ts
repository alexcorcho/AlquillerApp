import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../admin/login/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout();
  }
}
