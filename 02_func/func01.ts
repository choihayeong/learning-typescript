function add(a: number, b: number) {
    return a+b;
}
/* arrow function */
const minus = (a: number, b: number) => a-b;

/* Call Signature */
type Add = (a: number, b: number) => number;

const addCalc:Add = (a, b) => a+b;