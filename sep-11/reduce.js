const numbers = [175, 50, 25];
const arrayOne=numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(arrayOne);
