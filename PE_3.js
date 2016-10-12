//Finding prime factors of a number, number

function main(n) {

	console.log(recurse(n, 2, 0));

}

//Recursively divides the number by each integer starting at 2 until the number equals 1
//Returns the divisor
function recurse(num, div) {

	if(num == 1) return div;
	else if(num % div == 0) return recurse(num / div, div);
	else return recurse(num, div + 1);

}