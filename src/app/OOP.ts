
class Animal
{
    age: number
    breed: string   
    constructor(age: number, breed: string)
    { 
        this.age = age
        this.breed = breed
    }    
    makeSound_(sound: string): void
    {
        console.log(sound)
        console.log(sound)
        console.log(sound)
    }
}
class Dog extends Animal
{
    private _name: string
    static species = 'Canis Familaris'
     constructor(age: number, breed: string)
    {
         super(age, breed) // call parent constructor
        
    }   
     makeSound(): void
    {
        super.makeSound_('woof woof')
    }   
     getAgeInHumanYears(): number
    {
        return this.age * 7    // super.age will throw error
    }

    get name(): string
    {
       return this._name
    }
    set name(name: string): void
    {
        if(!name || name.length > 20) {
            throw new Error('Name invalid')
        }
        else {
            this._name = name
        }
    }
}
class Cat extends Animal
{
    constructor(age: number, breed: string)
    {
        super(age, breed)
    }  
      makeSound(): void
    {
        super.makeSound_('meow meow')
    }

let b =new Dog(14,"biscuit");
b.name="Fido"
console.log(b.name)
b.makeSound()
//console.log(a.makeSound())
console.log(Dog.species) 