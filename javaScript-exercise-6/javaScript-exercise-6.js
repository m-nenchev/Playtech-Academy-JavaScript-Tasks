let n1 = 0, n2 = 1, nextNumber;
console.log("Fibonacci Numbers:");
console.log(n1); // print 0
console.log(n2); // print 1

nextNumber = n1 + n2;

while (nextNumber <= 500) {

    // print the next number
    console.log(nextNumber);

    n1 = n2;
    n2 = nextNumber;
    nextNumber = n1 + n2;
}