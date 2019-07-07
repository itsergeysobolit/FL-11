let a = +prompt('Enter side length A', '');
let b = +prompt('Enter side length B', '');
let c = +prompt('Enter side length C', '');
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log('Equivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}