let flag = true;

const myPromise = new Promise((resolve, reject) => {
    if (flag)
        resolve("Promise has resolved!");
    else
        reject("Promise has rejected!")
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))