import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable,of,from } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { collectionData } from 'rxfire/firestore';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { docData } from 'rxfire/firestore';
import { snapshotChanges } from 'angularfire2/database';
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

   i:Observable<any>

  private itemsCollection:AngularFirestoreCollection<Item>
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<any> 
  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('users');
    this.item =this.itemsCollection.snapshotChanges()
   // this.itemDoc = afs.doc<Item>('emoji/pyCU6OaPkEap2OGyt2RH');
    //console.log(this.itemDoc)
    //this.item = this.itemDoc.valueChanges();
     //console.log(this.item)

  }
  addItem(val:Item)
  {
    this.itemsCollection.add(val)
  }

  
  ngOnInit() {
    // const source = of( { 'foo': 1, 'bar': 'str', 'baz': 3 });
  // source.map(val=>Object.values(val)).subscribe(data => console.log(data))
   const db = firebase.firestore();
  // const query = db.collection('emoji').limit(5);
  // collectionData(query).subscribe(val =>{
  //     val.map(items => console.log(Object.assign(this.item,items)) )
  //  }
  // )
  // collectionData(query).subscribe();
//   const ref = db.doc('emoji/userJeffD');

//    docData(ref).pipe(
//   switchMap(animal => {
//     const foodRef = db.doc(`emoji/userJeffD`);
//     return docData(foodRef)
//   })
// )
// .subscribe(food => console.log(food))
//     }
 
const firestore=db.collection("emoji")
const query =firestore.where('favs',"array-contains",'camera')
query.get().then(snapshot =>{
  snapshot.docs.forEach(doc =>{
   
    console.log(doc.id,doc.data())
  })
})

}
}