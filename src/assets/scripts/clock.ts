type Clock = {
  hours: number | string,
  minutes: number | string,
  seconds?: number | string,
  milliseconds?: number | string,
};

type TodayDate = {
  year: number,
  month: number | string,
  day: number,
  weekday: string,
};

/** getClockNow */
export const getClockNow = () : Clock => {
  const TODAY = new Date();

  const CURRENT = {
    hours : TODAY.getHours(),
    minutes : TODAY.getMinutes(),
    seconds : TODAY.getSeconds(),
  };

  return {
    hours: CURRENT.hours,
    minutes: CURRENT.minutes,
    seconds: CURRENT.seconds,
  };
}

type DateIndex = (idx: number) => string;

const getMonthString: DateIndex = (index) => {
  const MONTH_ARR : string[] = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return MONTH_ARR[index];
};

const getWeekDayString: DateIndex = (index) => {
  const WEEKDAY_ARR : string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return WEEKDAY_ARR[index];
};

type TodayInfo = (type: string) => TodayDate;

/** getTodayDate */
export const getTodayDate: TodayInfo = (monthType) => {
  const TODAY = new Date();

  const MONTH_INDEX = TODAY.getMonth();
  const WEEKDAY_INDEX = TODAY.getDay();

  return {
    year: TODAY.getFullYear(),
    month: monthType === "string" ? getMonthString(MONTH_INDEX) : MONTH_INDEX + 1,
    day: TODAY.getDate(),
    weekday: getWeekDayString(WEEKDAY_INDEX),
  };
}