//Sum of even Fibonacci numbers beneath N

function main(n) {
    
    var esum = 2;
    
    var last1 = 2;
    var last2 = 1; 
    
    while(last1 < n){
        var fsum = last1 + last2;
        last2 = last1;
        last1 = fsum;
        if(fsum % 2 == 0 && fsum < n)esum += fsum;
    }
    
    console.log(esum);

}