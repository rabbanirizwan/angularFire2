import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import {Upload} from '../../upload';
import {UploadService} from '../../services/upload.service';

import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;
  isHovering: boolean;
  constructor(private upSvc:UploadService,private storage: AngularFireStorage) { }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()

    // The file's download URL
    //this.downloadURL = this.task.downloadURL(); 
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  
  detectFiles(event) {
    this.selectedFiles = event.target.files;
}

uploadSingle() {
  let file = this.selectedFiles.item(0)
  this.currentUpload = new Upload(file);
  this.upSvc.pushUpload(this.currentUpload)
}

uploadMulti() {
  let files = this.selectedFiles
  let filesIndex = _.range(files.length)
  _.each(filesIndex, (idx) => {
    this.currentUpload = new Upload(files[idx]);
    this.upSvc.pushUpload(this.currentUpload)}
  )
}
  ngOnInit() {
  }

}
