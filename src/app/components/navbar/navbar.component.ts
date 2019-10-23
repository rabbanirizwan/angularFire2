import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('500ms ease-in')),
      transition('open => closed', animate('500ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }


  navbarOpen:boolean = false;
  collapse:string = "closed";
  toggleNavbar() {
    console.log("toggle")
    this.navbarOpen = !this.navbarOpen
  }
  toggleCollapse() {
    // this.show = !this.show
      this.collapse = this.collapse == "open" ? 'closed' : 'open';
    }
  ngOnInit() {
  }

}
