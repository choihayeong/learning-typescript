type Nickname = string;
type Health = number;
type Friends = Array<string>;

type Team = "read" | "blue" | "yellow";
type HealthBar = 1 | 5 | 10;

interface Player {
    nickname: Nickname,
    healthBar: HealthBar,
    team: Team,
}
/* interface는 타입스크립트에게 오브젝트의 모양을 설명해주기 위해서만 사용 */

/* type Player = {
    nickname: Nickname,
    healthBar: HealthBar,
    team: Team,
} */

const brooksy: Player = {
    nickname: "brooksy",
    healthBar: 10,
    team: "yellow",
    // team: "pink"
    /* Team 타입은 제한 된 범위 내에서 써야 한다 */
};

type Food = string;

const bulgogi: Food = "Delicious Korean Food";