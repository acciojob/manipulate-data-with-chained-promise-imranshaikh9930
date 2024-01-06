function generateNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numbers = [1, 2, 3, 4];
            resolve(numbers);
        }, 3000);
    });
}

function filterOddNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
    });
}

function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        const multipliedNumbers = numbers.map((num) => num * 2);
        resolve(multipliedNumbers);
    });
}

function updateOutputText(result) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = result.join(', ');
}

// Chain the promises
generateNumbers()
    .then(filterOddNumbers)
    .then(multiplyByTwo)
    .then(updateOutputText)
    .catch((error) => console.error(error));