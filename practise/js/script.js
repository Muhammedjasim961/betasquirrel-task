
//ARROW FUNCTION
const x = (x, y) => (x / y)

//const test = document.getElementById("demo").innerHTML = x(5, 3)

//SPREAD OPERATORS
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];
// const year = [...q1, ...q2, ...q3, ...q4]
//document.getElementById("demo").innerHTML = year;

//MATHS MATHS.MAX OR MIN
// const numbers = [100, 200, 400, 700]
// let maxValue = Math.max(...numbers)
// document.getElementById("demo").innerHTML = maxValue;


// THE FOR/OF LOOP


// const myObj =  "jasim"

// let text = "";
// for (let x of myObj) {
//     text += x + "<br>";
// }

//  document.getElementById("demo").innerHTML = text;


// MAP

// const cars = [{
//     name: "jasim",
//     age: 20,
//     place: "vengappally"

// }]
  
// const newCars = cars.map((value) => value.place)

//  document.getElementById("demo").innerHTML = newCars;

//CREATE SETS

// let numbers = new Set(["one", "two", "three", "four"])
// numbers.add("five")
// numbers.add("six")

// document.getElementById("demo").innerHTML = numbers.size;

//JS CLASSES

// class cars {
//     constructor(name, number) {
//         this.name = name;
//         this.number = number
//     }
// }

// const newCar = new cars("Rolls", 2023);
// const OldCar = new cars("Roys", 2024);

// document.getElementById('demo').innerHTML = newCar.name + " " + OldCar.number;
// newCar.style =" width: 100px";

//SYNCHRONOUS

// console.log("running-2")
// console.log("running-3")
// console.log("running-1")

//ASYNCHRONOUS

// console.log("running-1")
// setTimeout(() => {
//     console.log("running-2")
// }, 3000);

// console.log("running-3")

//CALL BACKS

// console.log("START")
// function getDataFromAPI(callback) {
//     setTimeout(() => {
        
//         callback (5)
//   },1000)
// }
// function getDataFromAPI2(callback) {
//     setTimeout(() => {
        
//         callback (5)
//   },1000)
// }
// function getDataFromAPI3(callback) {
//     setTimeout(() => {
        
//         callback (5)
//   },1000)
// }
// getDataFromAPI((value) => {
//     getDataFromAPI2((apiVal2) => {
//         getDataFromAPI3((apiVal3) => {
//             console.log(apiVal2 + apiVal3 + value)
//         })
//     })
// })
  
//  console.log("END")

// PROMISES

// const promise = new Promise((resolve, reject) => {
//     reject("Failed!")
// })
// promise.then((response) => {
//      console.log(response)
// })
//     .catch((error) => {
//      console.log(error)
//  })


// function getDataFromAPI(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(num)
//        }, 1000)
//    })
// }
// function getDataFromAPI2(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(num)
//        }, 1000)
//    })
// }
// getDataFromAPI(5).then((Response) => {
//     return getDataFromAPI2 (Response + 5)
// })
//     .then((response) => {
//     console.log(response)
// })

//ALL, ALLSETTELED, ANY,, RACE, ASYNC, AWAITE

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve(["java", "nodejs"])
//          reject("API Failed")
//     }, 2000);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(["React", "Express Js"])
//         //reject("API Failed")

//     }, 2000);
// })

    // const allPromise = Promise.race([promise1, promise2])
    //allSettled= it will give the status, All= give all the Ap is , any= any of the apis will return , race= first one will return,race= it will return first APis whether its reject or resolve

    // allPromise.then((res) => {
    //     console.log(res)
    // })
    //     .catch((res) => {
    //     console.log(res)
    // })

    //ASYNC

    // const fechData =async () => {
    //     const response = await promise2
    //     console.log(response)
    // }
// fechData()
    
//    const fechData =async () => {
//        try {
//            const response = await promise1;
//            console.log(response)
//        } catch (error) {
//            console.log(error)
//         }
//     }
//     fechData()


    //IIFE itermediatly invoke function Expression

//     (async () => {
//          const response = await promise2
//           console.log(response)
// })

//FUNCTION SUM ALL

// function allSum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
//document.getElementById("demo").innerHTML =allSum(4565, 879, 56)

//FUNCTION CALLING

// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName: "Jon",
//     lastName: "doe"
// };
// const person2 = {
//     firstName: "Merry",
//     lastName: "doe"
// };

// document.getElementById("demo").innerHTML = person.fullName.apply(person2)
//apply, call

// const person = {
//     firstName: "john",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName
//     }
// }

// const member = {
//     firstName: "huge",
//     lastName: "Thomas"
// }
// setInterval(() => {
//    let fullName = person.fullName.bind(member);
// document.getElementById("demo").innerHTML = fullName()
// },2000)
