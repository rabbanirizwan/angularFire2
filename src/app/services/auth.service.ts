import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";

import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from 'rxjs/observable';
import * as firebase from "firebase/app";
import {AngularFirestore} from 'angularfire2/firestore'
import {of} from 'rxjs'
//import {SwitchMap} from 'rxjs/operators';
import {User} from '../user';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators/switchMap';
import { map} from 'rxjs/operators/map';
import {of as ObservableOf} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<User>
  user: Observable<firebase.User>;
  uid=this.afAuth.authState.pipe(map(authState =>{
    if (!authState){
      return null
    }
    else{
      return authState.uid
    }
  }
                                     )
                                     )
  isAdmin:Observable<boolean>=this.uid.pipe(switchMap(uid=>{
    if(!uid){
      return ObservableOf(false);
    }
    else{
      return this.db.object<boolean>('./email'+uid).valueChanges()
    }
  }))  
  constructor(private afAuth:AngularFireAuth,private router:Router,private afs:AngularFirestore,private db:AngularFireDatabase) { 
  this.user$=this.afAuth.authState;
  
 
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
     this.afAuth.auth.signInWithPopup(provider)
      .then(() =>  console.log('successful auth'))
      .catch(error => console.log(error));
  }


  // get hasUsername() {
  //   return this.isPresent.username ? true : false
  // }
 
  // checkUsername(username: string) {
  //   username = username.toLowerCase()
  //   return this.db.object(`usernames/${username}`)
  // }
 
  // updateUsername(username: string) {
 
  //   let data = {}
  //   data[username] = this.currentUser.uid
 
  //   this.db.object(`/users/${this.currentUser.uid}`).update({"username": username})
  //   this.db.object(`/usernames`).update(data)
  // }
  
  
  signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }


}
