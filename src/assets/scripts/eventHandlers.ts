// challenge_01
export const superEventHandlers = () => {
  type Color = string; // challenge_05 에서도 사용
  const colors: Color[] = [
    "#1abc9c",
    "#3498db",
    "#9b59b6",
    "#f39c12",
    "#e74c3c",
  ];

  const h2Element = document.querySelector("h2") as HTMLElement;

  const eventHandlers = {
    mouseEnter: function (ele: unknown) {
      ele.target.style.color = colors[0];
      ele.target.innerText = "Mouse is here!";
    },
    mouseLeave: function (ele: unknown) {
      ele.target.style.color = colors[1];
      ele.target.innerText = "Mouse is out :(";
    },
    windowResize: function () {
      h2Element ? (h2Element.style.color = colors[2]) : undefined;
      h2Element ? (h2Element.innerText = "Resizing......") : undefined;
      // ele.style.color = colors[2];
      // ele.innerText = "Resizing......";
    },
    rightClick: function (ele: unknown) {
      ele.style.color = colors[3];
      ele.innerText = "Right Click!";
    },
  };

  h2Element?.addEventListener("mouseenter", eventHandlers.mouseEnter);
  h2Element?.addEventListener("mouseleave", eventHandlers.mouseLeave);
  window.addEventListener("resize", eventHandlers.windowResize);
  window.addEventListener("contextmenu", function () {
    h2Element ? eventHandlers.rightClick(h2Element) : undefined;
  });
};
