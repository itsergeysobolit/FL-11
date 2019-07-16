const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]
const numberOne = 1,
    numberTwo = 2,
    numberThree = 3,
    numberFour = 4,
    numberFive = 5,
    numberEight = 8;
// task 0
let getNumbers = string => {
    const arrNumbers = [];
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(parseFloat(string[i])) && isFinite(string[i])) {
            arrNumbers.push(parseInt(string[i]));
        }
    }
    return arrNumbers;
}
console.log(getNumbers('n1um3ber95'));
// task 1
function findTypes() {
    const objectType = {};
    for (let i = 0; i < arguments.length; i++) {
        switch (typeof arguments[i]) {
            case 'number':
                objectType.number = ++objectType.number || 1;
                break;
            case 'string':
                objectType.string = ++objectType.string || 1;
                break;
            case 'boolean':
                objectType.boolean = ++objectType.boolean || 1;
                break;
            case 'undefined':
                objectType.undefined = ++objectType.undefined || 1;
                break;
            case 'symbol':
                objectType.symbol = ++objectType.symbol || 1;
                break;
            case 'object':
                objectType.object = ++objectType.object || 1;
                break;
            default:
                break;
        }
    }
    return objectType;
}
console.log(findTypes(null, numberFive, 'hello'));
//task 2
let executeforEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
executeforEach([numberOne, numberTwo, numberThree], function (el) {
    console.log(el);
});
//task 3
let mapArray = (arr, callback) => {
    const arrNumbers = [];
    executeforEach(arr, item => {
        arrNumbers.push(callback(item));
    });
    return arrNumbers;
}
console.log(mapArray([numberTwo, numberFive, numberEight], el => el + numberThree));
//task 4 
let filterArray = (arr, callback) => {
    const arrNumbersFilter = [];
    executeforEach(arr, item => {
        if (callback(item)) {
            arrNumbersFilter.push(item);
        }
    });
    return arrNumbersFilter;
}
console.log(filterArray([numberTwo, numberFive, numberEight], el => el > numberThree));
//task 5 
let showFormattedDate = date => {
    let dateFormatted = date.toDateString().substring(numberThree);
    return `Date:${dateFormatted}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
//task 6
let canConvertToDate = string => {
    let dateParse = Date.parse(new Date(string));
    return !!dateParse;
}
console.log(canConvertToDate('2016-03-18T00:00:00'));
//task 7
let daysBetween = (firstDate, secondDate) => {
    let differenceTime = Math.abs(secondDate - firstDate)
    let amountOfMilliseconds = 1000;
    let amountOfMinutes = 3600;
    let amountOfHours = 24;
    let amountOfMillisecondsDay = amountOfMilliseconds * amountOfMinutes * amountOfHours;
    return Math.round(differenceTime / amountOfMillisecondsDay);
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));
//task 8
let getAmountOfAdultPeople = data => {
    let amountOfYears = 18;
    let amountOfDays = 365;
    let amountDaysOfYears = amountOfDays * amountOfYears;
    let arrData = [];
    arrData = filterArray(data, function (el) {
        if (daysBetween(Date.now(), new Date(el[' birthday '])) > amountDaysOfYears) {
            return true;
        }
    });
    return arrData.length;
}
console.log(getAmountOfAdultPeople(data));
//task 9
let keys = arr => {
    let keysArr = [];
    for (let key in arr) {
        if (arr) {
            keysArr.push(key);
        }
    }
    return keysArr;
}
console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
//task 10
let values = arr => {
    let valuesArr = [];
    for (let value in arr) {
        if (arr) {
            valuesArr.push(arr[value]);
        }
    }
    return valuesArr;
}
console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));