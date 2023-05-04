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

// async function fun () {
//     try {
//         let result = await myPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fun();

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

let result = Promise.all([myPromise1, myPromise2, myPromise3]);
result
    .then(res => console.log(res))
    .catch(err => console.log(err));