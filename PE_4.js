/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
9000009
*/

//n is the number of digits in the products

function main(n) {

	//Biggest possible number that is a multiple of 2 n digit numbers
	var checkNum = Math.pow((Math.pow(10, n) - 1), 2);
	//Smallest possible number that is a multiple of 2 n digit numbers
	var smallest = Math.pow((Math.pow(10, n - 1)), 2);

	while(checkNum >= smallest) {
		while(!isPalNum(checkNum)) {
			checkNum--;
		}

		var div = findMiddleDivisor(checkNum, n);
		if(div != 0){
			console.log(checkNum + ': ' + div + ', ' + checkNum / div);
			return;
		}
		checkNum--;
	}
}

//Checks if checkNum is a palindromic number
function isPalNum(checkNum) {
	var string = (checkNum + "");
	var fh = string.substring(0, Math.ceil(string.length / 2));
	var lh = string.substring(Math.floor(string.length / 2), string.length);
	
	lh = lh.split("").reverse().join("");

	return fh == lh;
}

//digitRestriction limites the range of what you look for to divisors with a certain number of digits
function findMiddleDivisor(num, digitRestriction) {
	var mNum = Math.sqrt(num);
	var tNum = Math.ceil(mNum);
	var bNum = Math.floor(mNum);

	while(digitCount(tNum) == digitRestriction || digitCount(bNum) == digitRestriction) {

		if (digitCount(tNum) == digitRestriction && num % tNum == 0 && digitCount(num / tNum) == digitRestriction) return tNum;
		if (digitCount(bNum) == digitRestriction && num % bNum == 0 && digitCount(num / bNum) == digitRestriction) return bNum;

		tNum++;
		bNum--;

	}

	return 0;
}

function digitCount(num) {
	return (num + "").length;
}