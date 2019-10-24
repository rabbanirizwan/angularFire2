import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireFunctions } from 'angularfire2/functions';

declare var Stripe: any;

const stripe = Stripe('pk_test_sk_test_UNWGCHfTL9UPLFXqQKiVtPwJ00KzXvWLWe');
const elements = stripe.elements();

const card = elements.create('card');

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements AfterViewInit {

  // DOM Element
  @ViewChild('cardForm',{static: false}) cardForm: ElementRef;

  constructor(private fun: AngularFireFunctions) {}

  // Mount the card form
  ngAfterViewInit() {
    card.mount(this.cardForm.nativeElement);
  }

  // Form submission Event Handler
  async handleForm(e) {
    e.preventDefault();
    const { token, error } = await stripe.createToken(card);
    const res = await this.fun
      .httpsCallable('startSubscription')({ source: token.id })
      .toPromise();
  }
}



