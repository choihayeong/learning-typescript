/* Overloading */
type Minus = {
    (a: number, b: number): number
    (a: number, b: string): number
}

const minusCalc: Minus = (a, b) => {
    if (typeof b === 'string') {
        return a;
    } else {
        return a-b;
    }
}

/* Next.js 예시 
Router.push({
    path: "/home",
    state: 1,
});

.push("/home");

// type이 두 가지 이상으로 나뉠 때 (예- object type 또는 string type)
*/

type Config = {
    path: string,
    state: object
};
type Push = {
    (path: string): void,
    (config: Config): void
};

const push: Push = config => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path, config.state);
    }
}

/* Multiple 예시 */
type Multiple = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
};

const multiply: Multiple = (a, b, c?: number) => {
    if(c) {
        return a+b+c;
    } else {
        return a+b;
    }
}

multiply(3, 4);
multiply(5, 4, 9);