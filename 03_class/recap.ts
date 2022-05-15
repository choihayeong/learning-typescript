// type vs interface

type PlayerB = {
    name: string
}
type PlayerX = PlayerB & {
    nickName: string
}
const playerB: PlayerB = {
    name: "Brooksy"
}
const playerX: PlayerX = {
    name: "Brooksy",
    nickName: "Brook"
}
//
interface PlayerE {
    name: string
}
interface PlayerY extends PlayerE {
    nickName: string
}
interface PlayerY {
    age: number
}
const playerE: PlayerE = {
    name: "Eiffel"
}
const playerY: PlayerY = {
    name: "Eiffel",
    nickName: "Tower",
    age: 300
}

type PlayerC = {
    firstName: string
}
interface PlayerD {
    firstName: string
}

class User implements PlayerD {
    constructor(
        public firstName: string
    ){}
}