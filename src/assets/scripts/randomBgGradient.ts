export const generateRandomBgGradient = () => {
  type Color = string;
  const variousColors: Color[] = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
  ];

  const genColorsButton = document.querySelector("#genColors") as HTMLElement;

  const getRandomBGColor = (): void => {
    const body = document.body as HTMLElement;

    const rndNum_01: number = Math.floor(Math.random() * variousColors.length);
    let rndNum_02: number;

    do {
      rndNum_02 = Math.floor(Math.random() * variousColors.length);
    } while (rndNum_01 === rndNum_02);

    const FROM_COLOR = variousColors[rndNum_01];
    const TO_COLOR = variousColors[rndNum_02];

    body.style.setProperty(
      "background",
      `linear-gradient(to left, ${FROM_COLOR}, ${TO_COLOR})`,
    );
  };

  genColorsButton?.addEventListener("click", getRandomBGColor);
};
