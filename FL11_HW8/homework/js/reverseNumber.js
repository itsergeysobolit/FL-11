let reverseNumber = number => {
    let resultNumber = 0;
    while (number) {
        resultNumber = resultNumber * 10 + number % 10;
        number = ~~(number / 10);
    }
    return resultNumber;
}
reverseNumber(-456);