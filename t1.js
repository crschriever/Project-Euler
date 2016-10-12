//Find the sum of all the multiples of 3 or 5 below N.

function main() {
    
    var n = 1000; //The number under which to find the sum of all multiple of 3 or 5
    
    var c = 3;
    var sum = 0;
    while(c < n){
        sum += c;
        var r3 = 3 - (c % 3);
        var r5 = 5 - (c % 5);
        c += (r3 > r5) ? r5 : r3;
    }
    
    console.log(sum);

}
