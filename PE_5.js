/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

//Finds the smallest number evenly divisable by the set of numbers 1 to n
function main(n) {

	var primes = [];
	var biggestP = 0;

	//Finds all of the prime factors of each number 2 to N,
	//Puts each of these prime factors into the primes array.
	for(var c = 2; c < n; c++){
		var cps = recurse(c, 2, [[2, 0]]);
		for(var x = 0; x < cps.length; x++){
			var primeAr = cps[x];
			var prime = primeAr[0];
			var primeC = primeAr[1];
			if(prime > biggestP) {
				primes.push([prime, primeC]);
				biggestP = prime;
			} else {
				for(var z = 0; z < primes.length; z++){
					if(primes[z][0] == prime){
						if(primes[z][1] < primeC) primes[z][1] = primeC;
						break;
					}
				}
			}
		}
	}

	var mult = 1;
	for(var c = 0; c < primes.length; c++){
		mult *= Math.pow(primes[c][0], primes[c][1]);
	}

	console.log(mult);

}


//returns an array of primes
function recurse(num, div, primes) {

	if(num == 1) return primes;
	else if(num % div == 0){
		primes[primes.length - 1][1]++;
		return recurse(num / div, div, primes);
	} else {
		while(num % div != 0){
			div++;
		}
		primes.push([div, 0]);
		return recurse(num, div, primes);
	}

}