import { Component, OnInit,ViewEncapsulation } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ForgotPasswordComponent implements OnInit {
 
  angularVoteCount: number;
  reactVoteCount: number;
  vueVoteCount: number;
  hasVoted = false;
  updating = false;
  fsRef: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore) { 
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.fsRef = this.afs.doc('frameworkPoll/current');    
      this.fsRef.valueChanges().subscribe(doc => {
      this.angularVoteCount = doc.angularVoteCount;
      this.reactVoteCount = doc.reactVoteCount;
      this.vueVoteCount = doc.vueVoteCount;
    });
  }

  vote(framework: string) {
    this.updating = true;
    this.afs.firestore.runTransaction(t => {
      return t.get(this.fsRef.ref).then(doc => {
        const newVoteCount = doc.data()[framework] + 1;
        t.update(this.fsRef.ref, { [framework]: newVoteCount });
      });
    })
      .then(() => {
        this.hasVoted = true;
        this.updating = false;
        console.log('Transaction successfully committed');
      })
      .catch(error => console.log('Transaction failed: ' + error));
  }
 
}
