// alert('Hello World'); 
// console.log('Hello World');

// console.error('This is an error');
// console.warn('This is a warning');

//  let, const 

// let age =30; 
// age = 31;
// console.log(age);

// let score;
// score = 10;
// console.log(score);

// const score = 10;
// console.log(score);

// Primitives data types: String, Numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof z);

// const name = 'John';
// const age = 30;

// Concatention 

// console.log('My name is ' + name +  ' and I am ' + age);

//  Template String for concatenation
// console.log(`My name is ${name} and I am ${age}`)

// const hello = (`My name is ${name} and I am ${age}`);
// console.log(hello);


// String properties and methods

// const s = 'hello';
// const s = 'tecnology, computer, it, code';
// console.log(s.length);

// console.log(s.toUpperCase())
// console.log(s.toLowerCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(' '))
// console.log(s.split(', '));

/* multi 
line 
comment */

// Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');
 
// fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));
// console.log(fruits);


// Object literals

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: ' 50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person);
// console.log(person.fristName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// destructuring, its a part of es6, its relatively new
// const {firstName, lastName, address:{city}} = person;
// console.log(city);

// person.email = 'john@gmail.com';

// console.log(person);

// const todos = [
// {   id: 1,
//     text: 'Take out trash',
//     isCompleted: true
// },
// {   id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
// },
// {   id: 3,
//     text: 'Dentist appt',
//     isCompleted: false
// }
// ];

// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todosJSON);

// Loops:
//  For 
// for(let i= 0; i<= 10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

// While
// let i = 0;
// while(i < 10) {
//     console.log(`While loop Number:  ${i}`);
//     i++;
//  }

//  Loops for array

// for(let i= 0; i< todos.length; i++){
//     console.log(todos[i].text);
//     }

// for(let todo of todos){
//     console.log(todo.text);
// }


// High order array methods


// functional proogramming

// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// const todoText= todos.map(function(todo){
//     return todo.text;

// });

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
    
// });

// console.log(todoCompleted);


// chain on other array methods

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;   
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);


// Conditions, if else

// const x = 10;

// if(x === 10){
//     console.log('x is 10');
// }


// const x = 20;

// if(x === 10){
//     console.log('x is 10');
// }else{
//     console.log('x is NOT 10');
// }

// const x = 2;

// if(x === 10){
//     console.log('x is 10');
// } else if (x > 10){
//     console.log('x is greater than 10');  
// }else{
//     console.log('x is less than 10');
// }

// OR operator

// const x = 2;
// const y = 11;
// if(x > 5 || y > 10){
//  console.log('x is more than 5 or y is more than 10');   
// }

// AND
// const x = 6;
// const y = 11;
// if(x > 5 && y > 10){
//  console.log('x is more than 5 or y is more than 10');    
// }

// Ternary operator shorthand if statement

// const x = 11;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);


// Switches

// const x = 9;
// const color = x > 10 ? 'red' : 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is  blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// const x = 9;
// const color = 'green';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is  blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// Functions

// function addNums(num1, num2){
//     console.log(num1 + num2);
// }
// addNums(5,4);

// const addNums = (num1= 1, num2=1 ) =>
// num1 + num2; 
// console.log(addNums(5,5));

// const addNums = num1 => num1 + 5;
// console.log(addNums(5));

// basics of Object Oriented Programming

// Constructor function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }   
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`; 
//     }
// }

//Date constructor
// new Date(dob)
 
// Instantiate object

// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');


// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// Prototypes:        ES6

// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }   

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`; 
// }  
 
// Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// console.log(person2.getFullName());
// console.log(person1);

// Class

// Consructor function

// function Person(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }   
    
//     Person.prototype.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
    
//     Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`; 
//     }  
    
//     const person1 = new Person('John', 'Doe', '4-3-1980');
//     const person2 = new Person('Mary', 'Smith', '3-6-1970');

// Class 

// Syntactic sugar

// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
    
//     }
// }

// Instantiate object

//     const person1 = new Person('John', 'Doe', '4-3-1980');
//     const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person2.getFullName());
// console.log(person1);


// DOM
// console.log(window);
// alert(1);


// Selecting from the dom
// Single element

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


// Looping
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

//Manpulating DOM

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent ='Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// Events
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//  e.preventDefault();
//  console.log(e.target.className);
// })


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//  e.preventDefault();
//  document.querySelector('#my-form').
//  style.background = '#ccc';
//  document.querySelector('body').classList.add('bg-dark');
//  document.querySelector('.items')
//  .lastElementChild.innerHTML = '<h1>Hello</h1>'; 
// });

// you can also use mouseover, mouseout in the addEventListener

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#user');


// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
//     e.preventDefault();

//     console.log(nameInput.value);
// }



// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#user');


// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
//     e.preventDefault();
//     if(nameInput.value === '' ||  emailInput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';  
        
//         setTimeout(() => msg.remove(), 3000);
//     }else{
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`$
//     {nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

        // Clear fields

//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }

