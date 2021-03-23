var candidate = parseInt(prompt("Please enter an integer greater than 1"));

// Number of factors that evenly divide candidate
var factorCount = 0;

for (var divisor = 1;  divisor <= candidate;  divisor++) {
   var remainder = candidate % divisor;
   if (remainder == 0) {
       factorCount++;
   }
}

// Determine the output and show it to the user.
var output;
if (factorCount == 2) {
   output = candidate + " is prime";
}
else {
   output = candidate + " is not prime";
}
alert(output);