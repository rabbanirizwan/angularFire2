import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   user= null;

  constructor(private authService:AuthService) {

   }

  ngOnInit() {
//    this.authService.getAuthState().subscribe(user =>{
  //    this.user=user;
  //  })
  }
  // loginWithGoogle() {
  //   this.authService.loginWithGoogle();
  // }

}
