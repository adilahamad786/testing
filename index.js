let flag = true;

const myPromise1 = new Promise((resolve, reject) => {
    if (flag)
        resolve("Promise has resolved!");
    else
        reject("Promise has rejected!");
});

const myPromise2 = new Promise((resolve, reject) => {
    if (flag)
        resolve("Promise has resolved!");
    else
        reject("Promise has rejected!");
});

const myPromise3 = new Promise((resolve, reject) => {
    if (false)
        resolve("Promise has resolved!");
    else
        reject("Promise has rejected!");
});

// // async function fun () {
// //     try {
// //         let result = await myPromise;
// //         console.log(result);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // fun();

// // myPromise
// //     .then(result => console.log(result))
// //     .catch(error => console.log(error))

// let result = Promise.all([myPromise1, myPromise2, myPromise3]);
// result
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


// let result = Promise.allSettled([myPromise1, myPromise2, myPromise3]);
// result
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// Output : [
//     { status: 'fulfilled', value: 'Promise has resolved!' },
//     { status: 'fulfilled', value: 'Promise has resolved!' },
//     { status: 'rejected', reason: 'Promise has rejected!' }
// ]


let result1 = Promise.any([myPromise1, myPromise2, myPromise3]); // give result as first resolved value.
// result1
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// Output : Promise has resolved!

let result2 = Promise.any([myPromise3]); // When all promises are rejected
// result2
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// Output : Promise has rejected!



let result3 = Promise.race([myPromise1, myPromise2, myPromise3]);
// result3
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// Output : Promise has resolved!

let result4 = Promise.race([myPromise3, myPromise2, myPromise1]);
// result4
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// Output : Promise has rejected!


// USING async UTILITY MODULE
const async = require('async');

// let parallel = async.parallel([
//     function fun(cb) {
//         cb(null, "Value")
//     },
//     function (cb) {
//         cb(null, "Val")
//     },
//     (cb) => cb(null, "va")
// ], function (error, result) {
//     if (error)
//         console.log(error);
//     else
//         console.log(result);
// })

// console.log(parallel);
// Output : [ 'Value', 'Val', 'va' ]


// let queue = async.queue((task, callback) => {
//     // if (task.task === "My task 3") { throw Error("Task is failed!") }
//     console.log(task);
//     if (task.fun)
//         task.fun();
//     callback();
// }, 1)

// queue.drain(() => console.log("All task completed!"));

// queue.error(function (error, task) { console.log("An error is occuring!") });

// queue.push({ task : "My task 1"})
// queue.push({ task : "My task 2"}, function () { console.log("My task 2 is finished!")})
// queue.push({ task : "My task 3"}, function (error) { if (error) { console.log("My task 3 has failed!")} })
// queue.push({ task : "My task 4"})
// queue.push({ task : "My task 5"})
// queue.push({ fun : () => console.log("This is a function task!")})

// Output :
// { task: 'My task 1' }
// { task: 'My task 2' }
// My task 2 is finished!
// { task: 'My task 3' }
// { task: 'My task 4' }
// { task: 'My task 5' }
// { fun: [Function: fun] }
// This is a function task!
// All task completed!


// async.waterfall([
//     function(callback) {
//         console.log("First")
//         callback(null, 'one', 'two');
//     },
//     function(arg1, arg2, callback) {
//         // arg1 now equals 'one' and arg2 now equals 'two'
//         console.log("Second", arg1, arg2)
//         callback(null, 'three');
//     },
//     function(arg1, callback) {
//         // arg1 now equals 'three'
//         console.log("Third", arg1)
//         callback(null, 'done');
//     }
// ], function (err, result) {
//     // result now equals 'done'
// });

// Output :
// First
// Second one two
// Third three


// Taking input using command line arguments

// let inputFromArguemnt = process.argv;
// console.log(inputFromArguemnt);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// Input : node index.js firstArgInput secondArgInput

// Output :
// [
//     'G:\\nodejs\\node.exe',
//     'C:\\Users\\Adil Ahamad\\Desktop\\testing\\index.js',
//     'firstArgInput',
//     'secondArgInput'
// ]
// firstArgInput
// secondArgInput



// Working with JSON data and Object Literals, JSON, which stands for JavaScript Object Notation
let objectLiteral = {
    name : "Adil Ahamad",
    email : "adilahamad@email.com"
}
console.log(objectLiteral);

let convertIntoJson = JSON.stringify(objectLiteral);
console.log(convertIntoJson);

let convertIntoObjectLiteral = JSON.parse(convertIntoJson);
console.log(convertIntoObjectLiteral);

let str = toString(objectLiteral); // objectLiteral.toString();
console.log(str);

// Output :
// { name: 'Adil Ahamad', email: 'adilahamad@email.com' }
// {"name":"Adil Ahamad","email":"adilahamad@email.com"}
// { name: 'Adil Ahamad', email: 'adilahamad@email.com' }
// [object Undefined]