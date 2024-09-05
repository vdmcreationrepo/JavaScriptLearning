// let myArray=[1,2,3,4,5,'videsh',true] //  this is the one way
let myArray= new Array(1,2,3,4,5,'videsh',true)
// console.log(myArray);

// check value for some specific position
if(myArray.length>=10)
{
    // console.log(myArray[10]);
}
else {
    // console.log("10 position not available");
}

// change array index value
// myArray[1]="Makwana"

// console.log(myArray);


// convert array to string
let stringValue=myArray.toString
// console.log(stringValue);


// sort the array
let firstArray= new Array('first',1,'second',2,3,4,5,'videsh',true)
console.log(firstArray.sort());
// result : [ 1, 2, 3, 4, 5, 'first', 'second', true, 'videsh' ]