// import $ from 'jquery';

// $('#root').append("<h1>This was made using jquery.</h1>")


// console.log('This is not a react project. App working: open app/index.js to start exploring ES6');


import { addToDom } from './helpers';
import add from './add.js';
import SuperPerson from './person';

addToDom('<hr>')

const Bob = new SuperPerson('Bob', 'Bobcat Man');

addToDom(Bob.speak("Hello world, I'm Bob"));

const Susie = new SuperPerson('Susie', 'Wonder Lady');

addToDom(Susie.speak('Sup errybody, I\'m Susie'));

addToDom(Bob.xRay())

addToDom(Bob.sayHeroName())
