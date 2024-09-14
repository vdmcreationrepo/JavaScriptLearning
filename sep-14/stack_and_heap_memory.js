// stack and heap memory

// primitive datatypes used stack memory
// non primitive datatypes used heap memory

let firstName="Videsh";
let secondName=firstName; // this will return copy 

secondName="Makwana"
// console.log(firstName);
// console.log(secondName);

let myData={
    "firstName":"Videsh",
    "secondName":"Makwana"
}

// console.log(myData);
let secondData=myData;
secondData.firstName="FirstName"
console.log(myData);


