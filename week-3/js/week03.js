//Object Methode

let user = {
    name: "John"
};
let admin = {
    name: "Admin"
};
//'this' is not bound
function sayHi() {
    alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

//arrow() uses this from the outer user.sayHi() method:

let user1 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user1.sayHi(); // Ilya


/* Summary
    Functions that are stored in object properties are called “methods”.
    Methods allow objects to “act” like object.doSomething().
    Methods can reference the object as this.

    The value of this is defined at run-time.

    When a function is declared, it may use this, but that this has no value until the function is called.
    A function can be copied between objects.
    When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
    Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
    */

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // shows the current step
        alert(this.step);
    }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 
// same as ladder.up().up().down().showStep(); // 1


function Human (name) {
    return {
      name,
      getName() {
        return this.name;
      }
    };
}
  
  const zell = new Human('Zell');
  const vincy = new Human('Vincy');
  
  console.log(zell.getName()); // Zell


//   with event listeners
let button = document.querySelector('button');

// button.addEventListener('click', function() {
//   console.log(this); // button
// });

// novice to ninja chapter 5 Objects
const spiderman = {}; // created an object literal assigned to the variable spiderman
// const spiderman = new Object(); alternate way to create using constructor (also empty object)
const name = 'Iron Man';
const realName = 'Tony Stark';
// long way
// const ironMan = { name: name, realName: realName };
// short ES6 way
const ironMan = { name, realName };
// to access the properties use dot notation ironMan.name or bracket notation superman['name] 
const hulk = {name : 'Hulk', catchPhrase: 'Hulk Smash!' }

superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
// In this example, we create a variable called key . We then iterate over the properties of the 
// superman object and use key to log the property name and superman[key] to look up the value of each property.
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}
//  "name: Superman"
//  "real name: Clark Kent"
//  "height: 75"
//  "weight: 235"
//  "hero: true"
//  "villain: false"
//  "allies: Batman,Supergirl,Superboy"
//  "fly: function (){
//     console.log(\"Up, up and away!\");
// }"

// Object.keys() and Object.values() are methods used to see the key or value respectively of an object

/*Reading from Chapter 6:
DOM (Document Object Model represents an Html as a network of connected nodes that form a tree-like structure
Everything on web page is represented by a node htmltags ,the text insde these tags ,even the attributes of a tagdg are all nodes 
The Html tag is the root node and every other part of the dcument is a child node of this 
Dom is not a part of javascript because it is langauage agnostic.This means that it can be used in any programming language, not just JavaCriptt,
API that let us acess and modify diffrernts parts of a web page using the built in document object  )

Console Shortcuts
Here are a couple of useful shortcuts for the console:
Pressing TAB will autocomplete any methods and should show you a list of possible methods
Pressing the UP arrow key will select the previous command entered.
NodeTypes
Code	Type
1	element
2	attribute
3	text
8	comment
9	body
 
Summary


*/
