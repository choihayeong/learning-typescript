export const changeBgColor = () => {
  const boxElement = document.querySelector(".box") as HTMLElement;

  const changeBgColor = () => {
    const ww = window.innerWidth;

    ww >= 1024
      ? boxElement?.style.setProperty("--box-background", "#91A6FF")
      : ww >= 750
        ? boxElement?.style.setProperty("--box-background", "#C897EE")
        : boxElement?.style.setProperty("--box-background", "#FF88DC");
  };

  window.addEventListener("resize", changeBgColor);
};
