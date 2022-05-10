// polymorphism
type Print = {
    <T> (a: T): T
};

const anyPrint: Print = arr => arr[0];

const aa = anyPrint([1,2,3,4]);

