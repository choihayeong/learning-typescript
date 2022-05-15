interface Trips {
    abroadTours: Array<string>,
    domesticTours: Array<string>
    abroadBranches(abroad: Array<string>): Array<string>,
    numOfBranches(abroad: number, domestic: number): number
}
interface TourGuides {
    manager: Array<string>
}

class TravelAgency implements Trips, TourGuides {
    constructor(
        public abroadTours: Array<string>,
        public domesticTours: Array<string>,
        public manager: Array<string>
    ){}
    abroadBranches(abroad: Array<string>) {
        return abroad;
    }
    numOfBranches(abroad: number, domestic: number) {
        let totalBranches = this.abroadTours.length + this.domesticTours.length;

        return totalBranches;
    }
}

/* interface는 함수의 argument로도 쓰일 수 있고 return으로도 쓰일 수 있다. */
function makePackageTour(tour: Trips): Trips {
    return {
        abroadTours: ["Western Europe", "US & Canada", "Eastern Europe"],
        domesticTours: ["울릉도 독도", "마라도 제주도"],
        abroadBranches: (abroad) => abroad,
        numOfBranches: (abroad, domestic) => abroad + domestic
    };
}

makePackageTour({
    abroadTours: ["Western Europe", "US & Canada", "Eastern Europe"],
    domesticTours: ["울릉도 독도", "마라도 제주도"],
    abroadBranches: (abroad) => abroad,
    numOfBranches: (abroad, domestic) => abroad + domestic
})