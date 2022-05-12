// polymorphism, generic
type Print = <T> (arr: T[]) => T;

const anyPrint: Print = arr => arr[0];

const a = anyPrint([1, 2, 3, 4]);
const b = anyPrint([true, false, true]);
const c = anyPrint(["apple", "carrot", "strawberry"]);
const d = anyPrint(["apple", true, 100]);

// d.toUpperCase();
/* 
any타입을 쓰면 위에 구문은 오류가 안남 
=> any타입을 쓰지 않는 이유
*/

type TwoGeneric = <T, M> (arr: T[], b: M) => T;

const printTG: TwoGeneric = ele => ele[0];

const w = printTG([1, 2, 3, 4], "x");
const x = printTG([true, false, true], 3030);
const y = printTG(["apple", "carrot", "strawberry"], true);
const z = printTG(["apple", true, 100], ["aa"]);