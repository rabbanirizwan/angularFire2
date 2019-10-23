class Animal {
    constructor(public voice){}
    getVioce(){
      return this.voice
    }
}
 var a = new Animal("wow");
 console.log(a.getVioce())
