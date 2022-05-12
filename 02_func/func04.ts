function somePrint<V> (a: V[]) {
    return a[0];
}

const varX = somePrint<boolean>([true, false]);
// const b = superPrint<boolean>([10, 9, 8]);

type Player<E> = {
    name: string,
    extraInfo: E
}

type BrooksyExtra = {
    favFood: string
}
type BrooksyPlayer = Player<BrooksyExtra>;

const brooksy: BrooksyPlayer = {
    name: "brooksy",
    extraInfo: {
        favFood: "Taco 🌮"
    }
}

const eiffel: Player<null> = {
    name: "eiffel",
    extraInfo: null
}

type SomeType = Array<number>;

let varA: SomeType = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {
    return arr;
}

// Reactjs 예시 useState<number>();