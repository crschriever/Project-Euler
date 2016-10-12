process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

//Find the sum of all the multiples of 3 or 5 below N.

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        
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

}
