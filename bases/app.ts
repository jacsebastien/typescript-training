class Person {
    name: string;
    // only accessible inside this class
    private type: string = "";
    // only accessible inside this class AND children classes
    protected age: number = 20;

    // create username property and assign it to properties of Person
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }   
}

// Inheritance
class Developer extends Person {
    // Override content of super class
    // name = "Sebastien";

    constructor(username: string) {
        super("Sebastien", username);
        this.age = 28;
        // this.type = "Developer";     // Wont work
    }
}

const person = new Person("Sebastien", "sja");
// console.log(person.name, person.username);
// person.printAge();
// person.setType("Young guy");

const sebastien = new Developer("sja");
// console.log(sebastien);

// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
// console.log(plant.species);

plant.species = "AB";
// console.log(plant.species);

plant.species = "Tree";
// console.log(plant.species);


// Static Properties & Methods
class Helpers {
    // can be called without instanciation of the class 
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(8));

// Abstract Classes
// Can not be instanciated but is made to be extended
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    // with abstract functions do not create body of function, only his declaration
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private constructors & singletons
class OnlyOne {
    private static instance: OnlyOne;

    // Do not allow editing name outside of constructor
    private constructor(public readonly name: string) {}

    static getInstance() {
        // Create an instance of the classe ONLY if there are no other instances
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("The Only One");     // won't work
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = "Something else";   // won't work