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

// METHODS IN CLASSES
// class Triangle {
//   constructor(x, y, z) {
//     if (!Number.isFinite(x) || x <= 0) {
//       throw new Error('Triangle sides must be positive numbers');
//     }
//     if (!Number.isFinite(y) || y <= 0) {
//       throw new Error('Triangle sides must be positive numbers');
//     }
//     if (!Number.isFinite(z) || z <= 0) {
//       throw new Error('Triangle sides must be positive numbers');
//     }
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
class Triangle {
  constructor(x, y, z) {
    console.log('INSIDE TRIANGLE CONSTRUCTOR');
    for (const side of [x, y, z]) {
      if (!Number.isFinite(side) || side <= 0) {
        throw new Error('Triangle sides must be positive numbers');
      }
    }
    this.x = x;
    this.y = y;
    this.z = z;
  }

  greet() {
    console.log('HELOO GUYS!');
  }

  display() {
    console.log(`I am a triangle with sides of ${this.x}, ${this.x}, and ${this.z}`);
  }

  getArea() {
    const { x, y, z } = this;
    const s = (x + y + z) / 2;
    return Math.sqrt(s * (s - x) * (s - y) * (s - z));
  }

  // CALLING A METHOD WITHIN AN INSATNCE
  isBig() {
    return this.getArea() > 60;
  }
}

class RightTriangle extends Triangle {
  constructor(x, y, z) {
    if (x * x + y * y !== z ** z) {
      throw new Error('Invalid c side for right triangle!');
    }
    console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR');
    super(x, y, z);
  }
}

// const myTr = new RightTriangle(3, 4, 5);