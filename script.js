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
const rightTriangle = {
  x: 9,
  y: 12,
  hypotenuse() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  },
  area() {
    return (this.x * this.y) / 2;
  },
};
rightTriangle.hypotenuse();
// 15
rightTriangle.area();
// 54