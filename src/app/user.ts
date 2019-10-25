export class User{
    uid:string;
    email:string;
    photoURL?:string;
    somethingCustom?:string;
    username?:string ="";
    constructor(auth) {
        this.uid = auth.uid
      }

   
}


