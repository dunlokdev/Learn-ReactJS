// class Person {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   info() {
//     console.log(
//       `My name is ${this.name} - I am ${this.age} years old - Live at: ${this.address}`
//     );
//   }
// }

// const person1 = new Person("Dunlok", 21, "Da Lat");
// person1.info();

// ! Class Inheritance
class Animal {
  constructor(name, sound) {
    // todo
    this.name = name;
    this.sound = sound;
  }

  doAction() {
    console.log(">>> Sound: ", this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

const hucky = new Dog("Hucky Sociu", "Go go go");
hucky.doAction();
