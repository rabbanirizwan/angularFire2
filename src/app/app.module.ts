import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import {AngularFirestoreModule} from  'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { ItemsComponent } from './components/items/items.component';
import {ItemService} from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LoadingComponent } from './components/loading/loading.component';
import {AngularFireFunctionsModule} from 'angularfire2/functions';
import { FileDropDirective } from './file-drop.directive';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { TranslateComponent } from './components/translate/translate.component';

import {createCustomElement} from '@angular/elements';
import { EmojiComponent } from './components/emoji/emoji.component';
import { SortableDirective } from './sortable.directive';
import { HoldableDirective } from './holdable.directive';
import { UpComponent } from './components/up/up.component';
import {CdkTableModule} from '@angular/cdk/table';
import { PaymentFormComponent } from './payment-form/payment-form.component';

import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import {MatChipsModule} from '@angular/material/chips';

import {MatCheckboxModule} from '@angular/material/checkbox';

firebase.initializeApp(environment.firebaseConfig)
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    UploadFormComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LoadingComponent,
    FileDropDirective,
    TranslateComponent,
    EmojiComponent,
    SortableDirective,
    HoldableDirective,
    UpComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'angular-CRUD'),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [ItemService,AngularFireDatabase,AuthService],
  bootstrap: [AppComponent],
  entryComponents:[ VerifyEmailComponent]
})
export class AppModule { 
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    // const elements:any[]=[
    //   [AddItemComponent,"Add"],
    //   [ForgotPasswordComponent,"fpassword"]
    // ]

    // for(const[component,name] of elements){
    // const el =createCustomElement(component,{injector:this.injector});
    // customElements.define(name,el)
    // }

  
      const el = createCustomElement(VerifyEmailComponent, { injector: this.injector });
      customElements.define('framework-poll', el);
    
  }
  }

