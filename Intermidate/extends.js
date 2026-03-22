class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
  rest() {
    console.log(`${this.name} is resting ..`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
  rest() {
    console.log(`${this.name} resting..`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
  rest() {
    console.log(`${this.name} resting..`);
  }
}

class Koyal extends Animal, Cat {
  fly() {
    console.log(`${this.name} flys.`);
  }
  rest() {
    console.log(`${this.name} resting..`);
  }
}
// Execution
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Koyal("Koyal");

// Common
dog.speak();
cat.speak();
bird.fly();

// More
dog.rest();
cat.rest();
bird.rest();

/* End */