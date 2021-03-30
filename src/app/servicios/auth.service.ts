import { Injectable, NgZone } from '@angular/core';
import { auth } from  'firebase/app';
import {AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';

export interface User{
  user:string;
  email:string;
  displayName: string;
  photoURL:string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userState: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
    ) {

   login(){

   }

   }


}
