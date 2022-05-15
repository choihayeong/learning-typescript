interface BStorage<T> {
    [key: string]: T
}

class LocalStroage<T> {
    private storage: BStorage<T> = {}
    set(key: string, value: T) {
        if (this.storage[key] === undefined) {
            this.storage[key] = value;

            return 0;
        } else {
            return "already exist the key";
        }
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

const stringStorage = new LocalStroage<string>();

stringStorage.set("apple", "apple123");
stringStorage.get("apple");

const booleanStorage = new LocalStroage<boolean>();

booleanStorage.set("banana", true);
booleanStorage.get("banana");