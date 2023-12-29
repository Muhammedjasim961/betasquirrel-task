//alert('Hello world');
//onsole.log('hello');

// function findSum(num1, num2) {
//     return  num1 + num2;
  
// }
// let sum = findSum(4, 5);
// alert(sum);
// console.log(sum);
// let result = sum + 6;
// alert(result);
// console.log(result);

// let age = 20;

// if (age >= 18) {
//     alert("Your Application Submitted");
// } else {
//     alert("You are not eligible at this age");
// }

// let color =  "Yellow";



//DOM-DOCUMENT OBJECT MODEL
//const color = element.value;

//function FindFavoriteFruits() {
    //const element = document.getElementById("color")
     
    //console.log(element.style.backgroundColor = 'red');
   // element.style.backgroundColor = 'blue'

// if (color === "orange") {
//     console.log("You like to Eat Orange");
// } else if (color === "yellow") {
//     console.log("You like to Eat Banana");
// } else {
//     console.log("You don't Like Fruits");
// }
//}

//oblects

// let student = {
//     firstName: "Muhammad",
//     lastName: "jasim",
//     age: 22,
//     isHePassed: true,
// };
// let car = {
//     model: "KIA",
//number: "kl127094",
// drive: function() {
//         console.log("Reaady");
//         return "ok ready";
//     }
// }
// console.log(car.drive());

///Arreys
// const fruits = ["banana", "Apple", 2.2, true];
// console.log(fruits[fruits.length - 2]);

//DATES()
// const d = new Date();
// document.getElementById("head").innerHTML = d;

// function displayDate() {
//     document.getElementById('demo').innerHTML = Date();
   
// }
// alert("changed the date");

//  let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// document.getElementById("demo").innerHTML = index;

//LOGICAL-OPERATER
// let x = 6;
// let y = 3;

// document.getElementById("demo").innerHTML =
// (x == 5 || y == 5) + "<br>" +
// (x == 6 || y == 0) + "<br>" +
// (x == 0 || y == 3) + "<br>" +
//     (x == 6 || y == 3);
//&& AND, ! NOT, || OR


//SWITCH case

// let cars = "TATA"

// switch (cars) {
//     case "VOLVO":
//         console.log("My Dream Car");
//         break;
//     case "KIA":
//         console.log('My Favorite car');
//         break;
//     case "Maruthi":
//         console.log('MY own car');
//         break;
//     default:
//         console.log('tHIS IS not my TYPE');
    
// }

//FOR LOOP 1x2=2;

// let count = 100;
// for (let i = 0; i <= 100; i++){
//     console.log(i);
// }

//WHILE LOOP

//let count = 0;

// while (count <= 10) {
//     console.log(count);
//     count++;
// }

//DO WHILE

// do {
//     console.log(count);
//     count++
// } while (count <= 10);

//Arrey LOOP

// let myArrey = ['jasim', 'mubashir', 'habeeb', 'ansir'];

// for (let i = 0; i < myArrey.length; i++) {
//     document.write(myArrey[i] + "</br>")
//     console.log(myArrey[i])
// }

//OBJECT LOOP

// let myObj = {
//     firstName: "jodan",
//     lastName: "Murrey",
//     age: 56
// };

// for(let x in myObj){
//     document.write(myObj[x] + "</br>")
//     console.log(myObj[x]);


// }//EVENTS
// function onAlert() {
//     alert("YOU HAVE CLICKED HERE");
// }
// onAlert()

// 2nd WAY!

// let btn = document.getElementById("btn");

// addEventListener("click", function () {
//     this.alert("Click Here!");

// });

// SPREAD OPERATOR

// const globalPlayer = {
//     name: "raju",
//     age: "20",
//     company: "google",
// };
// const globalPlayer2 = {
//     name: "rono",
//     age: "55",
//     company: "microsoft",
// };

// let player1 = {...globalPlayer };
// player1.name = 'jasim'

// console.log(player1);
//  console.log(globalPlayer)

// ARREY OPERATE

// const numberOne = [10, 11, 12, 13];
// const numberTwo = [14, 15, 16, 17];

// const Numbers = [...numberOne, ...numberTwo];
// console.log(Numbers)

// STRING NOT MUTABLE

// let myString = "rahul";
// let player = myString;
// player = "test";
// console.log(player)
// console.log(myString)


// ARRAY DESTRUCTURING

// const globalPlayer = ["son", "C.ronaldo","Messi"];
// const [first, second, third] = globalPlayer;

// console.log(third)

// REST OPERATOR ONLY ONE VALUE CAN CALL

// const myObj = {
//     id: 0,
//     name: 'Usman',
//     age: 20,
// };

// const {id,...rest} = myObj;
// console.log(id)
// console.log(rest)

// Arrow Method
// const myFunc = (value) => value + 5; {

// }
// console.log(myFunc(8))
// let sum = myFunc(12, 34)
// alert(sum)
// console.log(sum)
// let result = sum + 20;
// console.log(result);
// alert(result);


//FOREACH

// const globalPlayer = [
//     {
//         name: "jasim",
//         age: 20,
//         id: 0,
//     },
//     {
//         name: "Rajan",
//         age: 30,
//         id: 1,
//     },
//     {
//         name: "Ramu",
//         age: 40,
//         id: 2,
//     },
// ];
// for (let i = 0; i < globalPlayer.length; i++){
//     console.log(globalPlayer[i])
// }

//globalPlayer.forEach((value, index, array) => console.log(value.name))

// MAAAAP

// const globalPlayer = [
//     {
//         name: "jasim",
//         age: 20,
//         id: 0,
//     },
//     {
//         name: "Rajan",
//         age: 20,
//         id: 2,
//     },
//     {
//         name: "Ramu",
//         age: 40,
//         id: 2,
//     },
// ];

//const newArray = globalPlayer.map((value) => value.name);

//2ND WAY!

// const newArray = [];
// for (let i = 0; i < globalPlayer.length; i++){
//     newArray.push(globalPlayer[i].name)
// }
// console.log(newArray)

//FILTER

// const newArray = globalPlayer.filter((value) => value.age === 20 && value.id === 2);
// console.log(newArray)

//REDUCE

// const numberArray = [12, 34, 100, 50, 10];
// const newArray = numberArray.reduce((total, value) => total + value, 0)
// console.log(newArray);

//FIND METHOD

// const globalPlayer = [
//     {
//         name: "jasim",
//         age: 20,
//         id: 0,
//     },
//     {
//         name: "Rajan",
//         age: 20,
//         id: 2,
//     },
//     {
//         name: "Ramu",
//         age: 40,
//         id: 2,
//     },
// ];

// const newObjt = globalPlayer.find((value) => value.name === 'jasim')
// console.log(newObjt);


//SORT METHOD

// const numberArray = [12, 34, 100, 50, 10];

// const numberSorted = numberArray.sort((a, b) => a - b)
// console.log(numberArray)

//ES10 ECMA SCRIPT 10  NESTED ARRAYS MULTIPLE ARRAYS

// const newArray = [12, 23, [34, 45,], 78, 44, [89, 90,[78, 90],],[90,89,[99,45],],[67,78]]
// console.log(newArray.flat(Infinity))


//CHAINING

// const numberArray = [12, 34, 100, 50, 10];
 
// const newArray = numberArray
//     .map((value) => value)
//     .filter((data) => data > 10)
//     .sort((a, b) => a - b)
//     .reduce((total, value) => total + value, 0)

// console.log(newArray)




//PRACTICE 2023
//spread Operator

// const myObj = {
//     name: 'mJAsim',
//     age: 20,
//     job: 'google'
// }

// const player1 = { ...myObj }

// myObj.name = 'muhammed';
// myObj.age = 22;
// myObj.job = 'Microsoft'

// console.log(player1)
// console.log(myObj)



//REST  CAN PICKUP ONLY ONE OR MORE ELEMENTS

// const globalPlayer = {
//     name: "jasim",
//     id: 0,
//     age: 20,
// }

// const {name, ...rest} = globalPlayer;
// console.log(name)
// console.log(rest)

//ARROW FUNCTION

// const myFunc = (value) => value + 20; console.log(myFunc(34))



//FOR EACH
// const globalPlayer = [
//     {
//         name: "Ansir",
//         id: 1,
//         age: 23,
//     },
//     {
//         name: "Habeeb",
//         id: 2,
//         age: 23,
//     },
//     {
//         name: "Mubashir",
//         id: 2,
//         age: 20,
//     }
// ];


// const newArray = globalPlayer.filter((value) => value.age === 23 && value.id === 1)
// console.log(newArray)

//     globalPlayer.forEach((value, index, array) => console.log(value.name))
// console.log(globalPlayer);

//MAP METHOD

//const newArray = globalPlayer.map((value) => value.name)
//console.log(newArray)


//FOR LOOP METHOD
// const newArray = [];
// for (let i = 0; i < globalPlayer.length; i++) {
//     newArray.push(globalPlayer[i].name);
// }
// console.log(newArray)


//REDUCE METHOD


// const newArray = [22, 33, 44, 55, 66, 77]

// const output = newArray.reduce((total, value) => total + value, 0)
// console.log(output);


///FIND METHOD

// const globalPlayer = [
//     {
//         name: "Ansir",
//         id: 1,
//         age: 23,
//     },
//     {
//         name: "Habeeb",
//         id: 2,
//         age: 23,
//     },
//     {
//         name: "Mubashir",
//         id: 2,
//         age: 20,
//     }
// ];


// const myObj = globalPlayer.find((value) => value.name)
// console.log(myObj)


// SORT METHOD

const myArrey = [50, 90, 42, 63, 74];

const  numberArray = myArrey.sort((a, b) => a - b);

console.log(numberArray)