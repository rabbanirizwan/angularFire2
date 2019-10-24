import { Component, OnInit } from '@angular/core';
import { StoreService, Action } from '../../store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  spanish;
  constructor(private store: StoreService) {
    this.spanish = store.select('spanish.hola');
  }

  set() {
    this.store.dispatch(new Action('SET', { hello: 'world' }));
  }

  update() {
    this.store.dispatch(new Action('UPDATE', { spanish: { hola: 'mundo' } }));
  }

  delete() {
    this.store.dispatch(new Action('DELETE', 'spanish'));
  }

  ngOnInit() {
  }

}
