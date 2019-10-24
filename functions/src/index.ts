
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

import * as Stripe from 'stripe';
const stripe = new Stripe(functions.config().stripe.secret);
export const createStripeCustomer =functions.auth
.user()
.onCreate(async(userRecord,context)=>{
    const firebaseUID = userRecord.uid;
    const customer = await stripe.customers.create({
        metadata:{firebaseUID}
    });

    return db.doc(`users/${firebaseUID}`).update({
        stripeId:customer.id
    })
})













// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
