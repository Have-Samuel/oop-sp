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
const myMath = {
  add(x, y) {
    return x + y;
  },
  mult: (x, y) => x * y,
};
myMath.add(4, 4);
// 8
myMath.mult(3, 3);
// 9