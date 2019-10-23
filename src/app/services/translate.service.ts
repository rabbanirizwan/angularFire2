import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireObject,AngularFireList} from "angularfire2/database"
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private db:AngularFireDatabase) { }

  createTranslation(text:string){
    const data = { 'english': text }

    const key = this.db.list('/translations').push(data).key
    console.log(key)
   // return this.db.object(`translations/${key}`)
  }
}
