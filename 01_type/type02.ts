/* Alias */
type Name = string;
type Age = number;
type User = {
    readonly name: Name,
    age?: Age
};

const brooksy: User = {
    name: "Brooksy"
}

if(brooksy.age && brooksy.age < 10) {
    console.log(brooksy.age);
}

function userMaker(name:string): User {
    return {
        name: name,
    }
}
/* arrow function */
const usrMake = (name:string): User => ({name});


/* 
readonly를 붙이면 배열에 push나 변수에 재할당 불가
*/
const eiffel = userMaker("Eiffel");
eiffel.age = 12;
// eiffel.name = "Jason";

const serialNum : readonly number[] = [1,2,3,4,5];
// serialNum.push(6);

const user: readonly [string, number, boolean] = ["Brooksy", 1, true];
// user[0] = 1;


/* undefined, null, any */
let x: undefined = undefined;
let y: null = null;
let z: any[] = [1, 2, 3, 4];
const w: any = true;

z + w; // any 타입은 사용 안하는 것이 좋다