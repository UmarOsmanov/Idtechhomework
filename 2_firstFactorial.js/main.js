



function factorial(n) {
    if (n < 0) return "Menfi reqemler ucun faktorial teyin olunmamisdir";
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(8)); // Testing the function with 5










