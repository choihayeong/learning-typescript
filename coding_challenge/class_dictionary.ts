type Words = {
    [whatever: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {};
    }
    add(word: Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    get(term: string) {
        return this.words[term];
    }
    delete(word: string){
        if(this.words[word] !== undefined){
            delete this.words[word];
        }
    }
    update(word: string, newDefinition: string){
        if(this.words[word] !== undefined){
            this.words[word] = newDefinition;
        }
    }
    showAll(){
        return this.words;
    }
    count(){
        return Object.keys(this.words).length;
    }
}

class Word {
    constructor(
        public term: string,
        public def: string,
    ) {}
}

/* test case */
const tacos = new Word("tacos", "southern American food"),
    apple = new Word("apple🍎", "newton's fruit"),
    banana = new Word("banana🍌", "famous diet food"),
    carrot = new Word("carrot🥕", "vitamin A vegitable");

const dict = new Dict();

dict.add(tacos);
dict.add(apple);
dict.add(banana);
dict.add(carrot);
dict.get("tacos");
dict.delete("apple🍎");
dict.update("tacos", "southern American famous main dish 🌮");
dict.showAll();
dict.count();