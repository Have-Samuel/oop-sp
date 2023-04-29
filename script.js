// Adding functions as Methods
// const add = (x, y) => (x + y);
// const mult = (x, y) => (x * y);
// const sqr = (x) => (x * x);
// const pwr = (x, y) => (x ** y);

// const myMath = {};
// MTD I
// myMath.add = add;
// myMath.mult = mult;
// myMath.pwr = pwr;
// myMath.sqr = sqr;

// myMath.add(3, 4);
// // 7;
// myMath.mult(5, 5);
// // 25;
// myMath.sqr(5);
// // 25;
// myMath.pwr(2, 3);

// // MTD II
// const myMath = {
//   add, mult, sqr, pwr,
// };
// myMath.pwr(3, 3);
// // 27

// MTD III
// Adding them inline
// const myMath = {
//   add(x, y) {
//     return x + y;
//   },
//   mult: (x, y) => x * y,
// };
// myMath.add(4, 4);
// // 8
// myMath.mult(3, 3);
// // 9

// THIS & METHODS
// function triangleHypotenuse(x, y) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }
// triangleHypotenuse(3, 4);
// // 5
// function triangleArea(x, y) {
//   return (x * y) / 2;
// }
// triangleArea(3, 4);
// // 6

// const side1 = 3;
// const side2 = 4;
// const side3 = triangleHypotenuse(side1, side2);

// side3();

// const area = triangleArea(side1, side2);

// area();

// Using THIS
// const rightTriangle = {
//   x: 9,
//   y: 12,
//   hypotenuse() {
//     return Math.sqrt(this.x ** 2 + this.y ** 2);
//   },
//   area() {
//     return (this.x * this.y) / 2;
//   },
// };
// rightTriangle.hypotenuse();
// // 15
// rightTriangle.area();
// // 54

// // Using the above OBJECT LATERAL and turing it into a REUSABLE FUNCTION
// function Triangle(x, y) {
//   this.x = x;
//   this.y = y;
// }

// const t1 = new Triangle(3, 4);
// t1.area();
// // 6
// const t2 = new Triangle(5, 12);
// t2.hypotenuse();
// // 13

// // PROTOTYPES
// Triangle.prototype.hypotenuse = function () {
//   return Math.sqrt(this.x ** 2 + this.y ** 2);
// };
// Triangle.prototype.area = function () {
//   return (this.x * this.y) / 2;
// };

// Triangle(5, 7); // Returns Undefined!
// // Using The NEW OPERATOR
// const tri1 = new Triangle(3, 4);
// tri1.area(); // 6
// tri1.hypotenuse(); // 5
// const tri2 = new Triangle(9, 12);
// tri2.area(); // 54
// tri2.hypotenuse(); // 15

// CLASSES
// class Triangle {
//   greet() {
//     console.log('HELOO GUYS!');
//   }

//   display() {
//     console.log(`I am a triangle with sides of ${this.x} and ${this.y}`);
//   }
// }
// // INSTANTIATING A CLASS
// const firstTri = new Triangle();
// firstTri.x = 3;
// firstTri.y = 4;
// firstTri.greet(); // HELOO GUYS!
// const secondTri = new Triangle();
// secondTri.x = 9;
// secondTri.y = 12;
// secondTri.greet(); // HELOO GUYS!

// CONSTRUCTORS
// class Triangle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   greet() {
//     console.log('HELOO GUYS!');
//   }

//   display() {
//     console.log(`I am a triangle with sides of ${this.x} and ${this.y}`);
//   }
// }

// const t1 = new Triangle(3, 4);
// // undefined
// const t2 = new Triangle(9, 12);
// // undefined
// t1.display();
// // I am a triangle with sides of 3 and 4
// t2.display();
// // I am a triangle with sides of 9 and 12
// t1.greet();
// // HELOO GUYS!
// t2.greet();
// // HELOO GUYS!

// // VALIDATING DATA
// class Triangle {
//   constructor(x, y, z) {
//     // Using a LOOP thru [x,y,z] MTD-1
//     for (const side of [x, y, z]) {
//       if (!Number.isFinite(side) || side <= 0) {
//         throw new Error('Triangle sides must be positive numbers');
//       }
//     }
//     // MTD-2
//     // if (!Number.isFinite(x) || x <= 0) {
//     //   throw new Error('Triangle sides must be positive numbers');
//     // }
//     // if (!Number.isFinite(y) || y <= 0) {
//     //   throw new Error('Triangle sides must be positive numbers');
//     // }
//     // if (!Number.isFinite(z) || z <= 0) {
//     //   throw new Error('Triangle sides must be positive numbers');
//     // }
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }

//   greet() {
//     console.log('HELOO GUYS!');
//   }

//   display() {
//     console.log(`I am a triangle with sides of ${this.x}, ${this.x}, and ${this.z}`);
//   }
// }

// // METHODS IN CLASSES
// class Triangle {
//   constructor(x, y, z) {
//     console.log('INSIDE TRIANGLE CONSTRUCTOR')
//     for (const side of [x, y, z]) {
//       if (!Number.isFinite(side) || side <= 0) {
//         throw new Error('Triangle sides must be positive numbers');
//       }
//     }
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }

//   greet() {
//     console.log('HELOO GUYS!');
//   }

//   display() {
//     return `Triangle with sides of ${this.x}, ${this.x}, and ${this.z}`;
//   }

//   getArea() {
//     const { x, y, z } = this;
//     const s = (x + y + z) / 2;
//     return Math.sqrt(s * (s - x) * (s - y) * (s - z));
//   }

//   // CALLING A METHOD WITHIN AN INSATNCE
//   isBig() {
//     return this.getArea() > 60;
//   }
// }

// const t1 = new Triangle(3, 4, 5);
// t1.display(3, 4, 5); // 6
// const t2 = new Triangle(9, 12, 15);
// t2.display(9, 12, 15); // 54
// const t3 = new Triangle(20, 30, 40);
// t3.display(20, 30, 40);

// EXTENDS_SUPER
// METHODS IN CLASSES
// class RightTriangle extends Triangle {
//   constructor(x, y, z) {
//     if (x * x + y * y !== z * z) {
//       throw new Error('Invalid Z side for Right Triangle');
//     }
//     console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR')
//     super(x, y, z);
//     this.last = z;
//   }

//   isRightTriangle() {
//     return true;
//   }

//   display() {
//     return 'Right ' + super.display();
//   }
// }

// OOP CHALLENGE
// PART 1
// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   honk() {
//     return 'Beep.';
//   }

//   toString() {
//     return `The vehicle is a ${this.make}, ${this.model}, from ${this.year}`;
//   }
// }

// const myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
// myFirstVehicle.honk(); // Beep

// myFirstVehicle.toString(); // The vehicle is a Honda Monster Truck from 1999.

// // PART 2
// // Create a class for a car. The Car class should inherit from Vehicle and
// // each car instance should have a property called numWheels which has a value of 4.

// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model, year);
//     this.numWheels = 4;
//   }
// }

// // PART 3
// // Create a class for a Motorcycle.
// // This class should inherit from Vehicle and
// // each motorcycle instance should have a property called numWheels
// // which has a value of 2.
// // It should also have a revEngine method which returns “VROOM!!!”

// class Motorcycle extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model, year);
//     this.numWheels = 2;
//   }

//   revEngine() {
//     return 'VROOM!!!';
//   }
// }

// // PART 4
// // Create a class for a Garage.
// // It should have a property called vehicles which will store an array of vehicles,
// // and a property called capacity which is a number indicating how many vehicles
// // will fit in the garage. When you create a garage, vehicles will always be empty;
// // you only need to provide the capacity.

// // A garage should also have an add method,
// // which attempts to add a vehicle to the array of vehicles.
// // However, if you try to add something which is not a vehicle,
// // the garage should return the message “Only vehicles are allowed in here!”.
// // Also, if the garage is at capacity, it should say “Sorry, we’re full.”

// class Garage {
//   constructor(capacity) {
//     this.vehicles = [];
//     this.capacity = capacity;
//   }

//   add(newVehicle) {
//     if (!(newVehicle instanceof Vehicle)) {
//       return 'Only vehicles are allowed in here!';
//     }
//     if (this.vehicles.length >= this.capacity) {
//       return 'Sorry, we’re full.';
//     }
//     this.vehicles.push(newVehicle);
//     return 'Vehicle added!';
//   }
// }

// const garage = new Garage(2);
// garage.vehicles; // []
// garage.add(new Car('Hyundai', 'Elantra', 2015)); // "Vehicle added!"
// garage.vehicles; // [Car]
// garage.add('Taco'); // "Only vehicles are allowed in here!"
// garage.add(new Motorcycle('Honda', 'Nighthawk', 2000));
// // "Vehicle added!"
// garage.vehicles; // [Car, Motorcycle]
// garage.add(new Motorcycle('Honda', 'Nighthawk', 2001));
// // "Sorry, we're full."

// THIS KEYWORD
// const cat = {
//   name: 'Oxen',
//   breed: 'French',
//   dance: function(dance) {
//     console.log('THIS IS:', this);
//     console.log(`Meow, I am ${this.name} and I like ${dance}!!.`);
//   }
// }

// cat.name(); // Oxen
// cat.breed(); // French
// cat.dance();
// (dance) {
// console.log(`Meow, I am ${this.name} and I like ${dance}!!.`);

// const catsCopy = cat.dance;
// cat.dance === catsCopy
// true

// catsCopy('tango');
// Meow, I am undefined and I like tango!!.
// cat.dance('tango');
// Meow, I am Oxen and I like tango!!.

// REASONS FOR USING THIS

// const catsCopy = cat.dance; // We are just storing the function in a variable and executing it.
// catsCopy('tango'); // And getting a different result.
// Meow, I am undefined and I like tango!!.

// // THIS-WINDOW_ STUFF
// const cat = {
//   name: 'Oxen',
//   breed: 'French',
//   dance(dance) {
//     console.log('THIS IS:', this);
//     console.log(`Meow, I am ${this.name} and I like ${dance}!!.`);
//   },
// };

// // catsCopy('tango');
// // Meow, I am undefined and I like tango!!.
// // cat.dance('tango');
// // Meow, I am Oxen and I like tango!!.

// // Another Function
// function whatIsThis() {
//   console.log('THIS=', this);
// }
// // STORE THE ABOVE IN ANOTHER FUNCTION
// const myObj = {
//   func: whatIsThis,
//   color: 'Mangeta',
// };

// cat.dance('Salsa');
// const catsCopy = cat.dance;
// catsCopy('tango');

// myObj.func();
// // window.func();

// // Strict Mode
// // 'use strict';
// class Cat {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   dance(danceType) {
//     console.log('THIS IS:', this);
//     console.log(`Meow, I am ${this.name} and I like ${danceType}!!.`);
//   }
// }

// const funk = new Cat('Funk', 'Italian');
// funk.dance('Salsa');
// // funk is on the left side of the dot which is the object

// // If we Isolate the function
// const funkDance = funk.dance;
// funkDance('Salsa');

// // CALL KEYWORD
// const cat = {
//   name: 'Oxen',
//   breed: 'French',
//   dance(dance) {
//     console.log('THIS IS:', this);
//     console.log(`Meow, I am ${this.name} and I like ${dance}!!.`);
//   },
//   play: function(...toys) {
//     for (let toy of toys) {
//       console.log(`${this.name} plays with ${toy}`)
//     }
//   }
// };

// cat.play('string', 'my pantleg', 'my shoe', 'a ball');
// // Oxen plays with string
// // Oxen plays with my pantleg
// // Oxen plays with my shoe
// // Oxen plays with a ball

// const dog = {
//   name: 'Jack',
//   breed: 'Long Boby',
// };

// // Call the CALL method on the function
// cat.play.call(dog, 'DIDI', 'DODO', 'DADA');
// // Jack plays with DIDI
// // Jack plays with DODO
// // Jack plays with DADA

// // const havenDV = cat.dance;
// // havenDV.call(cat, 'Salsa');

// // const dog = {
// //   name: 'Jack',
// //   breed: 'Long Boby',
// // };

// // havenDV.call(dog, 'Kwasa Kwasa');

// // havenDV.call(window, 'Lingala');
// // havenDV.call(cat, 'Mpere');

// // function printThis() {
// //   console.log('THIS ====> ', this);
// // }

// // printThis.call(cat);

// BIND KEYWORD
const wax = {
  name: 'Oxen',
  breed: 'French',
  dance(dance) {
    console.log('THIS IS:', this);
    console.log(`Meow, I am ${this.name} and I like ${dance}!!.`);
  },
  play: function(...toys) {
    for (let toy of toys) {
      console.log(`${this.name} plays with ${toy}`)
    }
  }
};
// In previous examples, we have been calling the function immediately
const hen = wax.dance;
hen.call(wax, 'dombolo');