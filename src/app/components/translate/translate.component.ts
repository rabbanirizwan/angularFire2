import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import {  AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
    userText:string;
    currentTranslation

  constructor(private translateService:TranslateService) { }
  handleTranslation() {
    this.currentTranslation = this.translateService.createTranslation(this.userText)
  }

  defaultMessage() {
    if (!this.currentTranslation) return "Enter text and click run translation"
    else return "Running translation in the cloud..."
  }

  ngOnInit() {
  }

}
