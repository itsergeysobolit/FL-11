let a1 = +prompt('Enter a1', '');
let a2 = +prompt('Enter a2', '');
let b1 = +prompt('Enter b1', '');
let b2 = +prompt('Enter b2', '');
let c1 = +prompt('Enter c1', '');
let c2 = +prompt('Enter c2', '');
const half = 2;
if ((a1 + b1) / half === c1 && (a2 + b2) / half === c2) {
    console.log('true');
} else {
    console.log('false');
}