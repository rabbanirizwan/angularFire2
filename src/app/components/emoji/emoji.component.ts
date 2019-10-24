import { Component, OnInit } from '@angular/core';
import {AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/observable';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  //collection: any;


  constructor(private afs: AngularFirestore) {
    //this.collection = firebase.firestore().collection("emoji");
   }
  docRef: AngularFirestoreDocument;
  doc$: Observable<any>;

  
  ngOnInit() {
    this.docRef = this.afs.doc('emoji/UserJeffD');
    this.doc$ = this.docRef.valueChanges();
   // this.doc=this.collection.doc('emoji').get()//.collection;this.collection.doc(id).get();
    // let array1= [];
       
    //    this.doc$.forEach(doc =>{
    //   array1.push(doc.data());  
    //   })

    
  
  }
  update(e) {
    this.docRef.update(e) 
  }
  appendItem() {
    const emoji = '🍺 Beer Me'
    this.docRef.update({ 
      favs: firestore.FieldValue.arrayUnion(emoji) 
    })
  }

  removeItem(emoji) {
    this.docRef.update({ 
      favs:  firestore.FieldValue.arrayRemove(emoji) 
    })

}
}
