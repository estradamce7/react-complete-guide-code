// 1. Primitives: numbers, string, boolean
// 2. Complex types: arrays, objects
// 3. Function types, parameters

// Primitives
// Written in lowercase (ie Number will refer to a Number object)
let age: number;

age = 12;

let userName: string;

userName = 'Test';

let isInstructor: boolean;

isInstructor = true;

// Complex types

let hobbies: string[]; // we want an specifically an array of strings

hobbies = ['Sports', 'Cook'];

// Type alias - define your own base type, and use it instead of repeating type definitions
type Person = {
  name: string;
  age: number;
};

// // let person: any; // 'any' is no specific type and can be anything
// let person: { // object type definition - anything after the ":"
//   name: string;
//   age: number;
// };

let person: Person; // can now be re-used like this or as an array (Person[])

person = {
  name: 'Test',
  age: 30
}

let people: {
  name: string;
  age: number;
}[]; // we want to store people object in an array

// Type inference
// By default, TS tries to infer as many types as possible/it tries to know which types are used where w/out us explicitly stating those types
// let course = 'React - The Complete Guide';
// course = 12345; // will not work because of type inference above

// Union type is a type definition that allows more than one time. Can be done by adding a pipe "|" 
let course: string | number = 'React - The Complete Guide';
course = 12345;

// Functions and types
function add(a: number, b: number) {  // types can also be set to functions for return type
  return a + b;
}

function print(value: any) { // void is comparable to null and undefined but only used in conjunction with functions. so here, this function never returns
  console.log(value);
}

// Generics - with this function we can convert the function to a generic function
// when this fn is called, TS is able to understand that it should look at the concrete values of the args and it understands it will return a number
function insertAtBeginning<T>(array: T[], value: T) { // <T> tells TS that type is not any, but instead, the type of the array & value should be of the same
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// now insertAtBeginning can work with any type as it identified stringArray now as a string because of the type used. string type is now locked in

// updatedArray[0].split('');