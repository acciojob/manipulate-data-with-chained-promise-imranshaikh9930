//your JS code here. If required.

function chaniedPromise(){

	return new Promise((resolve,reject)=>{

		setTimeout(()=>{

			const arr = [1, 2, 3, 4];

			resolve(arr)
			
		},3000)
	})
}

function filterOdd(numbers){

	return new Promise((resolve,reject)=>{

		const evenNumber = numbers.filter((num)=> num % 2 === 0)
			resolve(number);
	})
	
}


function multipleNumber(evenNumber){

	return new Promise((resolve ,reject )=>{

		const multiple = evenNumber.map((num)=> num * 2);

		resolve(multiple);
	})
}


functuon displayOutput(res){

	const output = document.querySelector("#output");

	output.textContent = res.join(",");
}

// Promise Chaining
chaniedPromise()
.then(filterOdd)
.then(multipleNumber)
.then(displayOutput)
.catch((err)=>console.log(err));












