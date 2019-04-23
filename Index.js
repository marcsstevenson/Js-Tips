// The following is a series of examples for better js practices
// NOTE: IE will not run most of these >:-[

// Console logging

const foo = { name: 'tom', age: 23 };
const bar = { name: 'dick', age: 26 };
const baz = { name: 'harry', age: 63 };

// Console the objects with computed property names - by consoling to an object (NOT in IE)
console.log({ foo, bar, baz });

// Console with style
console.log('%c Something important', 'color: orange; font-weight: bold');

// Console table
console.table([foo, bar, baz]);

// Tracing where functions are called from (NOT in IE)
const deleteMe = () => console.trace('OMG why')

// this will outpout where the function was called (eg, (anonymous)	@	Index.js:21)

deleteMe();
deleteMe();

// Object destructuring
// for this example
const animal = {
  name: 'Bobby',
  meal: 'grass',
  diet: 'herbavore'
};

function feed(animal) {
  // Use a template literal to do string interpolation (NOT in IE)
  return `We feed ${animal.name} a meal of ${animal.meal} because ${animal.diet}.`;
}

console.log(feed(animal));

// the animal object can be destructured so that we no longer have to use animal.

function feed(animal) {
  const { name, meal, diet } = animal; // destructure the object (NOT in IE)
  return `We feed ${name} a meal of ${meal} because ${diet}`;
}

console.log(feed(animal));

function weFeed(str, animal) {
  return `${str[0]}We feed ${animal.name} a meal of ${animal.meal} because ${animal.diet}.`;
}

// Use a function to feed a template literal
const weFed = weFeed`It is Wednesday. ${animal}`;
console.log(weFed);

// **** Spread syntax - Objects
const pikachu = { name: 'Pikachu' };
const statsLvl0 = { hp: 40, attack: 60, defense: 45 };
const statsLvl1 = { hp: 45 };
const statsLvl2 = { attack: 65 };

//    Create a level 0 pikachu that has the base stats
var pikachuInstance = { ...pikachu, ...statsLvl0 };

//    Level it up to 1
pikachuInstance = { ...pikachuInstance, ...statsLvl1 };

//    Level it up to 2
pikachuInstance = { ...pikachuInstance, ...statsLvl2 };

console.log(pikachuInstance);

// **** Spread syntax - Arrays
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

//    Add more to the list using spread syntax rather than pushing each
pokemon = [...pokemon, 'Metapod', 'Weedle'];

console.log(pokemon);

//  *** Better array management
const orders = [500, 30, 99, 15, 223];

//  Reduce
const totalOrders = orders.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue);
console.log(totalOrders);

// Map
const taxedOrders = orders.map(v => v * 1.1);
console.log(taxedOrders);

// Filter
const highValue = orders.filter(v => v > 200);
console.log(highValue);

//  *** Async Await

//  with a random number generator which returns a promise
const random = () => {
  return Promise.resolve(Math.random());
}

//  say we want 3 random numbers and to add them together (much like if you want to load the config for a page and then get the model)
//  the old way of doing this is as follows
const sumRandomAsyncNumbers = () => {
  let first;
  let second;
  let third;

  first = random()
    .then(v => {
      first = v;
      return random();
    })
    .then(v => {
      second = v;
      return random();
    })
    .then(v => {
      third = v;
      return first + second + third;
    })
    .then(v => {
      console.log(`Result ${v}`);
    });
}

sumRandomAsyncNumbers();

//    now using async await, the function becomes much simpler
const sumRandomAsyncNumbers2 = async() => {
  let first = await random();
  let second = await random();
  let third = await random();

  console.log(`Result ${first + second + third}`);
}

sumRandomAsyncNumbers2();
