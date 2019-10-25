import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable,of,from,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { collectionData } from 'rxfire/firestore';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { docData } from 'rxfire/firestore';
import { snapshotChanges } from 'angularfire2/database';
import {ColumnName,heroes} from '../../table'
import {FormBuilder,FormGroup} from '@angular/forms'
export interface Item {
  name: string;
  description:string 
}
@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {
  db = firebase.firestore();

  constructor(private afs: AngularFirestore) { 
  
  }
  
  
  ngOnInit() {
    // const source = of( { 'foo': 1, 'bar': 'str', 'baz': 3 });
  // source.map(val=>Object.values(val)).subscribe(data => console.log(data))
  
  this.getItem()

}

async getItem(){
  const doc = await this.db.collection('emoji').get();
         
  let array1= [];
     
     doc.forEach(doc =>{
    array1.push(doc.data());  
    })
    console.log(array1)
  
  return array1;
}
 add(){
  this.db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}

async addItem(){

  await setTimeout(()=>{
    this.db.collection("users").add({
      first: "Ducj",
      last: "Kanaelace",
      born: 1852
  })
  },5000);

}

}