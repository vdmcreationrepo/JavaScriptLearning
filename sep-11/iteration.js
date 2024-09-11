const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
    txt += value + "<br>";
}
console.log(txt);

// array map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);


// flat map
const myArr = [1, 2, 3, 4, 5, 6];
const newArray=myArr.flatMap(value=>value*2)
console.log(newArray);
