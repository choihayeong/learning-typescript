/* void, never, unknown */
let aa: unknown;

if(typeof aa === 'number') {
    let bb = aa + 1;
}
if(typeof aa == 'string') {
    let bb = aa.toUpperCase();
}

function hello() {
    console.log('x');
}

const zz = hello();
// zz.toUpperCase();

function helloEx(name: string | number): never {
    throw new Error("xxx");
}

function greeting(name: string | number) {
    if(typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name // never type이다 (절대 실행되면 안됨)
    }
}