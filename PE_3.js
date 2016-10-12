//Finding prime factors of a number, number

function main(n) {

	console.log(recurse(n, 2, 0));

}

function recurse(num, div) {

	if(num == 1) return div;
	else if(num % div == 0) return recurse(num / div, div);
	else return recurse(num, div + 1);

}