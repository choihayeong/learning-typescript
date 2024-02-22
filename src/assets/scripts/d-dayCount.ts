export const getXmasCount = () => {
  const countdownEl = document.querySelector(".countdown") as HTMLElement;

  const TARGET_DATE = countdownEl?.dataset.date;
  const CONTENTS = countdownEl?.dataset.contents;

  const SECOND_IN_MS: number = 1000;
  const MINUTE_IN_MS = SECOND_IN_MS * 60;
  const HOUR_IN_MS = MINUTE_IN_MS * 60;
  const DAY_IN_MS = HOUR_IN_MS * 24;

  let intervalId;

  const countDday = () => {
    const TODAY = +new Date();
    const TARGET = TARGET_DATE ? +new Date(TARGET_DATE) : TODAY; // TARGET_DATE가 null 이든 undefined 일때는 일단 default 값으로 TODAY로 설정함.........

    const diff: number = TARGET - TODAY;

    const DAYS = Math.floor(diff / DAY_IN_MS);
    const HH = Math.floor((diff % DAY_IN_MS) / HOUR_IN_MS);
    const MM = Math.floor((diff % HOUR_IN_MS) / MINUTE_IN_MS);
    const SS = Math.floor((diff % MINUTE_IN_MS) / SECOND_IN_MS);

    countdownEl.innerHTML = `
      After ${DAYS}Days ${HH}Hours ${MM}Minutes ${SS}Seconds, <br />
      It's <strong>${CONTENTS}</strong>
    `;
  };

  countdownEl
    ? (intervalId = setInterval(countDday, SECOND_IN_MS))
    : clearInterval(intervalId);
};
