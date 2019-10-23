import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {RegisterComponent} from './components/register/register.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path:  'login',component:  LoginComponent},
  //   { path:  'register', component:  RegisterComponent },
  //   { path:  'forgot-password', component:  ForgotPasswordComponent },
  //   { path:  'verify-email', component:  VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
