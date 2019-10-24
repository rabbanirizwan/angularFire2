import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable,of,from } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { mapTo } from 'rxjs/operators';
export interface Item { name: string; }
@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {

  
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
  const source = of('david')
  source.map(name=>name.toUpperCase()).subscribe(data => console.log(data))
  }

}
