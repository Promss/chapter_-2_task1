function calcFactorial(num) {
    return (num === 0) ? 1 : num * calcFactorial(num - 1);
}

console.log(calcFactorial(4));