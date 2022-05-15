// abstract class review

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name: string): string
    abstract fullName(): string
}
/* 
추상 클래스는 이걸 상속 받는 다른 클래스가 가질 property와 method를 지정하도록 해줌 
추상 클래스로부터 인스턴스를 만들 수 없음.
*/

// new User()

class Player extends User {
    sayHi(name: string) {
        return `Hello Stranger named ${name}. Here is your fullname ${this.fullName()}`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}