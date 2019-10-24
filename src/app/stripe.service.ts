import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFirestore,AngularFirestoreDocument} from 'angularfire2/firestore';

import {Observable,of} from 'rxjs';
import {switchMap} from 'rxjs/operators'

interface User{
  uid: string;
  
  // Stripe customer ID
  stripeId?: string;

  // Stripe Subscription data
  subscriptionId?: string;
  status?: string;
  currentUsage?: number;
  itemId?: string
}

@Injectable({
  providedIn: 'root'
})
export class StripeService {
   user:Observable<User>;
  constructor(private afAuth:AngularFireAuth,private afs:AngularFirestore) { 
    this.user =this.afAuth.authState.pipe(
      switchMap(user=>{
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else{
          return of(null)
        }
      }))
  }

  async anonymousLogin(){
    const credential = await this.afAuth.auth.signInAnonymously();
    return await this.updateUserData(credential.user)
  }
  logout(){
    this.afAuth.auth.signOut()
  }
  private updateUserData(user:User){
    return this.afs.doc( `users/${user.uid}`).set({uid:user.uid},{merge:true})
  }
}
