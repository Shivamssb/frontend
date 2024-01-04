/*Data Types(primitive)
number => 123
bigInt => big number 
string => " "
boolean => true/false
null => standalone value(or empty value) type - object
undefined => undefined
symbol =>  for unique value
*/
/*
let nums =45
console.log(typeof nums)
var names = "Shivam"
console.log(typeof names)
let numbers = null
console.log(typeof numbers)
const ser = undefined
console.log(typeof ser )
//Symbol
let id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)
*/


//Non Primitive Data Types 
/* 
type of data type will be object for all non primitive data types
Array 
Object
Function 
*/

//Array 
let arrayNames = ["Shivam","Anuj",45]
console.log(arrayNames)
//Objects
let details = {
    name : "Shivam",
    Age : 45,
    Area : "Rau"
}
console.log(details)
//function
let functionName = function(){
    console.log("Hello World")
}
console.log(functionName)
