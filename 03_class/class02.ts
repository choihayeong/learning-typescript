// example
type Whatever = {
    [whatever: number]: string
}
let something: Whatever = {
    1: "apple",
    2: "banana",
    3: "carrot",
}
// 

type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    addWord(word: Word) {
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    findDefinition(term: string) {
        return this.words[term];
    }
    static printHello() {
        return "Hello";
    }
}

class Word {
    constructor (
        public readonly term: string,
        public readonly def: string
    ) {}
}

const tacos = new Word("tacos 🌮", "South American Food");

// tacos.term = "xxxxxx"; 
/* Word 클래스의 변수가 readonly라서 변경 불가 */

const dict = new Dict();

dict.addWord(tacos);
dict.findDefinition("tacos");

Dict.printHello();