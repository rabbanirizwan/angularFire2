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
  rating:string;
  review:string 
}


@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {
  db = firebase.firestore();

  
  movie:Item={
    name:'',
    rating:'',
    review:''
  }
  items:Item={
    name:'',
    rating:'',
    review:''
  }
  
  fan=[]
  data1 =[
    {
      name:"rizwan",
      description:"dash"
    },
    {
      name:"rabbani",
      description:"dash"
    }
  ]
  constructor(private afs: AngularFirestore) { 
  
  }
  
  
  ngOnInit() {
    // const source = of( { 'foo': 1, 'bar': 'str', 'baz': 3 });
  // source.map(val=>Object.values(val)).subscribe(data => console.log(data))
  
 
  this.getItem()

}

async getItem(){
  const doc = await this.db.collection('movie').get();
         
  let array1= [];
     
     doc.forEach(doc =>{
       
    this.fan.push(doc.data());  
    })
    // console.log(this.fan)
   
  return array1;
}

async addItem(){

   if(this.movie.name!=='' && this.movie.review!=='')
   {
    this.db.collection("movie").add(this.movie)

   }
    
  this.getItem()
}

}