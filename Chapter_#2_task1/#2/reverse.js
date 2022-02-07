function reverseNum(num) {
    value = num.toString();
    return value.split('').reverse().join('');
}

console.log(reverseNum(468841));