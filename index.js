let flag = true;

const myPromise = new Promise((resolve, reject) => {
    if (flag)
        resolve("Promise has resolved!");
    else
        reject("Promise has rejected!");
});

async function fun () {
    try {
        let result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fun();

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))