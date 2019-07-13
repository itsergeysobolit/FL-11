function pipe(x) {
    for (let i = 1; i < arguments.length; i++) {
        x = arguments[i](x);
    }
    return x;
}
let addOne = x => 1 + x;
pipe(1, addOne, addOne);