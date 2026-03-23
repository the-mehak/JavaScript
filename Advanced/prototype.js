// Constructor function for the 'Person' object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the 'Person' prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
 

// Constructor function for the 'Student' object, inheriting from 'Person'
function Student(name, age, grade) {
    // Call the 'Person' constructor to initialize 'name' and 'age'
    Person.call(this, name, age);
    this.grade = grade;
}

// Inheriting 'Person' prototype methods
Student.prototype = Object.create(Person.prototype);

// Adding a method specific to the 'Student' prototype
Student.prototype.study = function () {
    console.log(`${this.name} is studying hard.`);
};

// Creating instances of 'Person' and 'Student'
const person1 = new Person("Alice", 30);
const student1 = new Student("Bob", 20, "A");

// Using methods from the prototypes
person1.greet();   // Output: Hello, my name is Alice and I am 30 years old.
student1.greet();  // Output: Hello, my name is Bob and I am 20 years old.
student1.study();   // Output: Bob is studying hard.