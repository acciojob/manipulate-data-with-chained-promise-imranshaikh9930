function chainedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const arr = [1, 2, 3, 4];
            resolve(arr);
        }, 3000);
    });
}

function filterOdd(arr) {
    return new Promise((resolve) => {
        const evenNumber = arr.filter((num) => num % 2 === 0);
        resolve(evenNumber);
    });
}

function multipleNumber(arr) {
    return new Promise((resolve, reject) => {
        const multiple = arr.map((num) => num * 2);
        resolve(multiple);
    });
}

function displayOutput(res) {
    const output = document.querySelector("#output");
    output.textContent = res.join(",");
}

// Promise Chaining
chainedPromise()
    .then(filterOdd)
    .then(multipleNumber)
    .then(displayOutput)
    .catch((err) => console.log(err));
