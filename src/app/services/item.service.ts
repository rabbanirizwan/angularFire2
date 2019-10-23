import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {Item} from '../item';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemCollection:AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;
  itemDoc:AngularFirestoreDocument<Item>
  constructor(public afs:AngularFirestore) {
    this.itemCollection=this.afs.collection('users')
    this.items=   this.itemCollection.snapshotChanges().map(changes =>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    })
   }
 
   getItem(){
     return this.items;
   }

   addItem(item:Item){
     this.itemCollection.add(item)
   }

   delete(item:Item){
     this.itemDoc=this.afs.doc(`users/${item.id}`);
     this.itemDoc.delete()
   }
   
   updateItem(item:Item){
     console.log("service" + item)
    this.itemDoc=this.afs.doc(`users/${item.id}`);
    this.itemDoc.update(item);
   }
}
