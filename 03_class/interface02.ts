// interface vs. type

interface User {
    name: string
}
interface User {
    nickName: string
}
interface User {
    health: number
}
/* interface는 property 축적 기능이 있다 (type엔 없음) */

interface Player extends User {
}

const brooksy: Player = {
    name: "brooksy",
    nickName: "brook",
    health: 10
}

/* type User = {
    name: string
}
type Player = User & {

}

const eiffel: Player = {
    name: "eiffel"
} */