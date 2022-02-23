/*
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  } 
}
*/
/*
const policeman = {
  rank: "vezérezredes",
  arrest: function() {
    console.log(`Mint ${this.rank} letartóztatom.`);
  }
};

const policeman2 = {
  rank: "őrnagy",
  arrest: function() {
    console.log(`Mint ${this.rank} letartóztatom.`);
  }
};
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

class Policeman extends Person {
  constructor(name, age, rank) {
    super(name, age);
    this.rank = rank;
  }

  arrest() {
    console.log(`Mint ${this.rank} letartóztatom.`);
  }
}

const policeman = new Policeman("John", 25, "vezérezredes");
const policeman2 = new Policeman("Jack", 35, "őrnagy");

policeman.greet();
policeman.arrest();
policeman2.greet();
policeman2.arrest();

const person4 = new Person("John", 25);
const person5 = new Person("Jack", 35);

// person4.greet();
// person5.greet();

/*
const person1 = {
  name: "John",
  age: 25,
  // greet: function() {
  //   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  // }
};

//console.log(person1);


const person2 = {
  name: "Jim",
  age: 35,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }
};

const person3 = {
  name: "Jack",
  age: 45,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }
  // greet: () => {
  //   console.log(this)
  //   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  // }
};


person1.greet();
person2.greet();
person3.greet();


const greeting = (person) => {
  console.log(`Hello, my name is ${person.name} and I'm ${person.age} years old.`)
};

// greeting(5);
// greeting(person1);
// greeting(person2);
// greeting(person3);
*/
