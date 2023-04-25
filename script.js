// Adding functions as Methods
const add = (x, y) => (x + y);
const mult = (x, y) => (x * y);
const sqr = (x) => (x * x);
const pwr = (x, y) => (x ** y);

const myMath = {};

myMath.add = add;
myMath.mult = mult;
myMath.pwr = pwr;
myMath.sqr = sqr;
// One way
myMath.add(3, 4);
// 7;
myMath.mult(5, 5);
// 25;
myMath.sqr(5);
// 25;
myMath.pwr(2, 3);
