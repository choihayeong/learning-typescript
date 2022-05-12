abstract class User {
    constructor (
        protected firstName: string,
        protected lastName: string,
        protected nickName: string
    ) {}
    abstract getNickName(): void
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// const brooksy = new User("brooksy", "eiffel", "브룩시");
/* 
추상 클래스는 다른 클래스가 상속 받을 수 있는 클래스 
직접 새로운 인스턴스를 위와 같이 만들 수 없다
*/

class Player extends User {
    getNickName() {
        this.getFullName();
        console.log(this.nickName);
        /* nickName이 private이면 오류남 */
    }
}
/*
추상 클래스인 User에 추상 메서드가 있는 경우 이를(getNickName) 선언해 줘야 한다.
*/

/* class Player {
    constructor (
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
} */

const brooksy = new Player("brooksy", "eiffel", "브룩시");

// brooksy.firstName;
/* 
firstName은 private으로 보호 받고 있어서 
위와 같이 쓰면 오류남 
*/

brooksy.getFullName();
/*
   getFullName() 메서드 앞에 private, protected를 붙이면 오류남
*/