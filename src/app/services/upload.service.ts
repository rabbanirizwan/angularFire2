import { Injectable } from '@angular/core';
import * as firebase from "firebase"

import {AngularFirestore} from 'angularfire2/firestore'
import { AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Upload} from '../upload';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private af:AngularFirestore,private db:AngularFireDatabase) { }
  private basePath:string = '/uploads';
  upload:Observable<Upload[]>;

  pushUpload(upload:Upload){
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        //console.log(upload.url)
        console.log(upload.name)
        this.saveFileData(upload)
      }
    );
  }
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}
