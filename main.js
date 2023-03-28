// // I.) TYPES OF VARIABLES IN JS - Var, Let, Const
// // let a= 23;
// // let b;
// // b=323;
// // b=3266;

// // var c= 324;
// // var c= 456;

// // II.) == vs === in JS
// let d= 24;
// let e= '24';
// if(d==e){
//     console.log("== is working");
// }
// else{
//     console.log("== is not working");
// }

// if(d===e){
//     console.log("=== is working");
// }
// else{
//     console.log("=== is not working");
// }

// // III.) ARRAY IN JS

// let arr1= [23, 253, 74, 22, 1];
// console.log("normal arr" , arr1);

// // operations on array- MAP(), FOREACH(), FILTER(), FIND(), REDUCE()    

// // a.) map({callback function}) -> 1. makes the copy of the given arr
// //                             -> 2. can have continuous mapping i.e. METHOD CHAINING

// let mappedArr= arr1.map((item, idx) => {
//     return item =  2*item;
// })
// console.log("mapped arr1" , mappedArr);

// let otherMappedArr= arr1.map((item) => {
//         return item*2;
//     })
//     .map((item)=> {
//         return item*2;
//     });


// console.log("mapped arr2", otherMappedArr);

// // b.) forEach({callback function}) -> 1. Does not return anything new
// //                                  -> 2. No changes to the original array
// //                                  -> 3. So, we directly have to push the element to the arr

// let forArr= [];
// arr1.forEach((item)=> {
//     forArr.push(item*2);
//     return item*2;
// })

// console.log("forArr" , forArr);

// // c.) filter({callback function}) -> 1. Filters based on the condition provided.
// //                                 -> 2. Creates a new arr
// //                                 -> IMP. We can create filter funtion on our own with for loop also

// let filterArr= arr1.filter((item)=> {
//     return item> 50;
// })

// console.log("filterArr", filterArr);

// // d.) find({callback function}) -> 1. Returns ONLY FIRST ELEMENT with the given cond.
// //                               -> 2. If nothing found satisfying, returns 'UNDEFINED'

// let findArr= arr1.find( (item) => item> 50);
// console.log("findArr", findArr);

// // e.) reduce( (callback(accumulator, currentValue){}) , (initialValue)) -> 1. Returns ONLY 1 value
// //                                                                       -> 2. Returned value is outcome of these all values together by func

// let initialValue= 0;
// let reduceArr= arr1.reduce( (accumulator, currentValue)=>{return accumulator + currentValue}, initialValue);
// console.log("reduceArr", reduceArr);



// //****************************************************************************** */

// // (IV.) FUNCTION IN JS

// const greet= ()=> {
//     const prefix='Mr.';
//     return (name)=>{
//         console.log(`${prefix} ${name}, welcome! `);
//     }
// }

// greet()('Devashish');

// // Scope of a function

// //1. Global

// var f= '32';

// function adder(){
//     let g=7;
//     console.log("adder" , f+g);
// }

// adder();
// // console.log(g); //Not accessible outside the function's scope


// // {
// //     const h= 33;
// //     console.log("inside the block",h);
// // }

// // console.log("outside the block" , h);



// //************************ */
// // for(var i= 0 ; i<3; i++){
    
// //     const log= ()=> {
// //         console.log(i); // 3 3 3
// //     }
    
// //     setTimeout(log, 50);
    
// // }

// // for(let j= 0 ; j<3; j++){
    
// //     const log= ()=> {
// //         console.log(j); // 0 1 2
// //     }
    
// //     setTimeout(log, 50);
    
// // }

// // the reason why the answers is different in the var and let is because
// // var declares variable globally and so it modifies irrespective of the normal flow of the for loop
// // let declares variable locally to the scope, and so, the let is modified only whenever it is called
// // set time out, plays important role here, because, it is only because of this function, that the variable var got time to be modified

// //*********************************************************************************** */



// // (V.) CLOSURE-> 1. Local Memory of a func + it's parent's Lexical Environment
// //             -> 2. Function along with it's parent function's environment

// function outer(){
//     let x= 43;
//     return function add(){
//         let y=37;
//         return x+y; // finds x in local memory, but when not found, look in parent's memory.
//     }
// }

// // ADVANTAGES OF CLOSURE - 1. CURRYING
// //                         2. ENCAPSULATION/ DATA HIDING

// // CURRYING 

// let add= function (x){
//     return function(y){
//         console.log(x+y); // here each function has only one argument
//     }
// }

// let addByTwo= add(2);
// addByTwo(32);

// // DATA HIDING
// function Counter(){
//     var count= 0;
//     this.increamentCount= function(){
//         count++;
//         console.log("counter" , count);
//     }
// }


// // console.log(count); Count is not defined, so protected from direct use
// var adder= new Counter();
// adder.increamentCount();



// //(VI.) THIS KEYWORD
// console.log("this", this);

// function myFunc(){
//     console.log("func" , this);
// }

// myFunc();

// const obj= {
//     name: "Deva",
//     myFunc: myFunc,
// }

// obj.myFunc();


// //(VII.) CALL , APPLY , BIND
// const student1 = {
//     name: 'deva',
//     displayName1: function displayName(){
//         console.log(this.name);
//     }
// }

// const student2= {
//     name: 'hello',
//     displayName2: function displayName(){
//         console.log(this.name);
//     }
// }

// student1.displayName1();
// student2.displayName2();

// student1.displayName1.call(student2); // CALL forced displayName1 to use the second object as its 'this'

// // other example
// const myData = {
//     name: 'Rajat',
//     city: 'Delhi',
//     displayStay: function () {
//       console.log(this.name, 'stays in', this.city)
//     },
//   }
//   myData.displayStay()
  
//   // create an object yourData and try to use displayStay
//   const yourData = {
//    name: 'name',
//    city: 'city'
//   }
  
  
//   // answer
//   myData.displayStay.call(yourData);


//   //(VIII.) PROTOTYPES AND PROTOTYPAL INHERITANCE IN JS

//   /*
//     Whenever we create anything (like an object or function) in JavaScript, the JS Engine automatically attaches that thing with some properties and methods.

//     All this comes via prototypes.

//     __proto__ is the object where JS is putting it all.
//   */
//   let arr = ['Rajat', 'Raj']
//   console.log(arr.__proto__.forEach)
//   console.log(arr.__proto__) // same as Array.prototype
//   console.log(arr.__proto__.__proto__) // same as Object.prototype
//   console.log(arr.__proto__.__proto__.__proto__) // null
  
//   console.log("Array.prototype", Array.prototype);
//   console.log("Object.prototype", Object.prototype);

//   // can work on Object also
//   console.log(yourData);
//   console.log(yourData.__proto__);
//   console.log(yourData.__proto__.__proto__);

//   //Prototypal Inheritance is the way to inherit the properties and functions of one object to the __proto__ of another object
//   let object= {
//     name: 'Mayank',
//     city: 'Mumbai',
//   }

//   let newObject= {
//     name: 'Roshan'
//   }

//   newObject.__proto__= object;

//   console.log("newObj proto", newObject.city);
//   console.log(newObject.__proto__);


// setTimeout(()=>{
//     console.log("hello world");
// }, 2000)

// let i=0;
// const timer= setInterval(()=>{
//     console.log(i++);
//     if(i==6)
//         clearInterval(timer);
// }, 1000);


// const myInterval= setInterval(timerFunc, 1000);

// function timerFunc(){
//     const date= new Date();
//     // document.getElementById('timer').innerHTML= `${date.getHours()} ${date.getMinutes()} ${date.getSeconds()} ${date.toLoacaleTimeString()}`;
//     document.getElementById('timer').innerHTML=  date.toLocaleTimeString();
// } 

// function stopFunc(){
//     clearInterval(myInterval);
// }

// const promise = new Promise((resolve, reject) =>{
//     let a= 2;
//     if( a> 20){
//         resolve('working correctly true');
//     }
//     else{
//         reject('not working correctly false');
//     }
// });

// promise
//     .then((x) => {
//         console.log(x);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async function asyncCall(){
//     const result = await promise;
//     console.log(result);
// }

// asyncCall();


// let inputField= document.getElementById('input-element');
// const getData = (e)=> {
//     console.log(e.target.value);
// }

// const debounce = function( fn, delay){
//     let timer
//     return function(){
//         let context= this;
//         clearTimeout(timer);
//         timer = setTimeout( () => {
//             fn.apply(context, arguments)
//             console.log(fn, this, arguments);
//         }, delay);
//     }
// }

// inputField.addEventListener('keyup', debounce(getData, 300));


// let count = 10

// for (let i = 0; i < 10; i++) {
//   function timer(i) {
//     setTimeout(() => {
//       console.log(count)
//       count--
//     }, i * 500)
//   }
//   timer(i)
// }


// const expensive = () => {
//     console.log('expensive')
//   }
  
//   const throttle = (fn, limit) => {
//     let context = this
//     let flag = true
//     return function () {
//       if (flag) {
//         fn.apply(context, arguments)
//         flag = false
//       }
//       setTimeout(() => {
//         flag = true
//       }, limit)
//     }
//   }
//   const func = throttle(expensive, 2000)
//   window.addEventListener('resize', func)


// MODULE REVEALING PATTERN

// var cusNs= (function(){
//     function Customer(){console.log("I am customer")};
//     function CustomerInvoices(){console.log("I am Customer Invoice")};
//     function CustomerValidation(){console.log("I am Customer Validation")};
//     return{
//         Customer,
//         CustomerInvoices
//     }
// })();
  
// var newObj= cusNs;
// newObj.Customer();

// WAYS TO CREATE JAVASCRIPT OBJECT
// 1. LITERAL

// var pat= {name: '', address: ''};
// pat.Admit = function(){
//     console.log("I am admitted");
// }

// pat.Admit();

// 2. Object.create();
// var patNew= Object.create(pat);
// patNew.age= 33;
// pat.name= "dhruv"
// console.log(patNew);

// 3. Constructor
// function Patient(){
//     this.name= "",
//     this.address= "",
//     this.Admit= ()=>{}
// }
// var pat1= new Patient();
// console.log(pat1);

// 4. Class Keyword
// class Patientclass{

// }


// function Employee(){
//     this.Name="";
//     this.Address="";
//     this.DoWork= function(){
//         console.log("general work");
//     }
// }

// function Manager(){
//     this.Cabin= "";
//     this.DoWork= function(){
//         console.log("manegerial work");
//     }
// }

// var emp= new Employee();
// // console.log(Manager.prototype);
// Manager.prototype = emp;

// var man= new Manager();
// man.name='Deva';
// man.address="hello"
// man.DoWork();

// // Manager.__proto__ = Employee;
// // man.prototype= emp;
// console.log(Manager.prototype);

// var emp = new Employee();
// console.log(emp.__proto__);

// console.log(Employee.prototype);
// console.log(Employee.__proto__);

// console.log(Employee.prototype === emp.__proto__);

// let inputField= document.getElementById('input-element');
// console.log(inputField);

// inputField.addEventListener('keyup', debounce(storeVal, 1000));

// function storeVal(e){
//     console.log(e.target.value);
// }

// function debounce(fn, delay){
//     let timer
//     return function(){
//         let context= this;
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn.apply(context, arguments);
//         }, delay);
//     }
// }

// let inputField= document.getElementById('input-element');
// inputField.addEventListener('keyup', throttle(storeVal, 1000));

// function storeVal(e){
//     console.log(e.target.value);
// }

// function throttle(fn, delay){
//     let flag= false;
//     let context = this
//     return function(){
//         if (flag==true){
//             fn.apply(context, arguments);
//             flag=false;
//         }
    
//             setTimeout(function(){
//                 flag=true;
                
//             },delay);
    
//     }
// }

// function addByTwo(a){

//     return function(b){
//         console.log(a+b);
//     }
// }

// let x= addByTwo(2);
// x(5);
// x(34);

// function outer(){
//     let cnt=0;

//     return function(){
//         console.log(cnt);
//         cnt++;
//     }
// }

// let check= outer();
// check();
// check();
// check();
// check();


// // CLOSURE, THIS KI BINDING, __PROTO__ (DUNDER PROTO), EVENT HANDLING, DOM MANIPULATION, CURRYING



// function func(){
//     let a= 10;
//     function nf(){
//         a++;
//         function anf(){
//             a++;
//             console.log("anf", a);
//         }
//         console.log("nf" , a);
//         return anf;
//     }
//     return nf;
// }

// let x = func();
// let y= x();
// let z= y();
// let a= z;


function Car(name, price){
    this.name= name;
    this._price= price;
    this.isValid= function(){
        return price>1000;
    }
}

let maruti = new Car("Maruti", 100);
let bmw= Car("BMW", 1000);

console.log(maruti);
// bmw._price=20000;
console.log(bmw);

// bmw.isValid= function(){
//     return "I am a happy boy";
// }

// console.log(bmw.isValid());

Boolean.prototype.sahiKaro= function(){
    if (this === true){
        console.log("Ye true hai");
    }
    else{
        console.log("Ye true nahi hai");
    }
}

let t= true;
