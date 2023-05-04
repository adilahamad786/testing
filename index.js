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

let result = Promise.allSettled([myPromise1, myPromise2, myPromise3]);
result
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Output : [
//     { status: 'fulfilled', value: 'Promise has resolved!' },
//     { status: 'fulfilled', value: 'Promise has resolved!' },
//     { status: 'rejected', reason: 'Promise has rejected!' }
// ]