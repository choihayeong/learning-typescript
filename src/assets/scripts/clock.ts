type Clock = {
  hours: number | string,
  minutes: number | string,
  seconds: number | string,
  milliseconds?: number | string,
};

type TodayDate = {
  year: number,
  month: number | string,
  day: number,
  weekday: string,
};

export const getClockNow = () : Clock => {
  const TODAY = new Date();

  const CURRENT = {
    hours : TODAY.getHours(),
    minutes : TODAY.getMinutes(),
    seconds : TODAY.getSeconds(),
  }

  return {
    hours: CURRENT.hours,
    minutes: CURRENT.minutes,
    seconds: CURRENT.seconds,
  };
}

type MonthString = (idx: number) => string;

const getMonthString: MonthString = (index)=> {
  const MONTH_ARR : string [] = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return MONTH_ARR[index];
}

type TodayInfo = (type: string) => TodayDate;

export const getTodayDate: TodayInfo = (monthType) => {
  const TODAY = new Date();

  const MONTH_INDEX = TODAY.getMonth();
  const WEEKDAY_INDEX = TODAY.getDay();

  return {
    year: TODAY.getFullYear(),
    month: monthType === "string" ? getMonthString(MONTH_INDEX) : MONTH_INDEX + 1,
    day: TODAY.getDate(),
    weekday: "Monday",
  };
}