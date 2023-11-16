import { random } from "./random";

const rndOne : number = random(10);
const rndTwo : number = random(20);

console.log(`${rndOne}, ${rndTwo}`);

// challenge_01
type Color = string;
const colors : Color[] = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2Element = document.querySelector("h2") as HTMLElement;

const eventHandlers = {
  mouseEnter : function(ele: any) {
    ele.target.style.color = colors[0];
    ele.target.innerText = "Mouse is here!";
  },
  mouseLeave : function(ele: any) {
    ele.target.style.color = colors[1];
    ele.target.innerText = "Mouse is out :(";
  },
  windowResize : function() {
    h2Element? h2Element.style.color = colors[2] : undefined;
    h2Element? h2Element.innerText = "Resizing......" : undefined;
    // ele.style.color = colors[2];
    // ele.innerText = "Resizing......";
  },
  rightClick : function(ele: any) {
    ele.style.color = colors[3];
    ele.innerText = "Right Click!";
  }
}

h2Element?.addEventListener("mouseenter", eventHandlers.mouseEnter);
h2Element?.addEventListener("mouseleave", eventHandlers.mouseLeave);
window.addEventListener("resize", eventHandlers.windowResize);
window.addEventListener("contextmenu", function() {
  h2Element ? eventHandlers.rightClick(h2Element) : undefined;
});

// challenge_02
const boxElement = document.querySelector(".box") as HTMLElement;

const changeBgColor = () => {
  let ww = window.innerWidth;

  ww >= 1024 ? boxElement?.style.setProperty("--box-background","#91A6FF") : 
    ww >= 750 ? boxElement?.style.setProperty("--box-background","#C897EE") : 
      boxElement?.style.setProperty("--box-background","#FF88DC");
}

window.addEventListener("resize", changeBgColor);

// challenge_03
const casinoForm = document.getElementById("casinoForm") as HTMLElement;
const rangeNumber = document.getElementById("iptRange") as HTMLInputElement;
const guessNumber = document.getElementById("iptGuess") as HTMLInputElement;

let formInputs : HTMLInputElement[]  = [rangeNumber, guessNumber];

const div = document.createElement("div") as HTMLElement;
const button = document.createElement("button") as HTMLElement;

type Casino = {
  range: number,
  user: number,
  target: number,
};

const elementRemove = (ele: HTMLElement) => {
  ele.remove();
};

// modal
const createModal = (parentEl: any, modalData: Casino) => {
  const WARNING_MESSAGE = `You must choose number under <strong>${modalData.range}</strong>`;
  const RESULT_MESSAGE = `
    You choose : <span id="userNumber">${modalData.user}</span>, <br />
    the machine choose : <span id="rndNumber">${modalData.target}</span> <br />
    <br />
    <strong id="resultMsg">
      ${modalData.user === modalData.target ? "You Win! 😎" : "You Lose..... 🙄"}
    </strong>
  `

  div.classList.add("modal");

  div.innerHTML = `
    <div class="modal__inner">
      ${modalData.user > modalData.range ? WARNING_MESSAGE : RESULT_MESSAGE}
    </div>
  `

  parentEl.append(div);
};

const closeModal = () => {
  const modal = document.querySelector(".modal") as HTMLElement;

  modal?.addEventListener("click", function() {
    elementRemove(modal);
  });
};

// reset button
const createResetButton = (parentEl: any) => {
  button.classList.add("btn--reset");
  button.textContent = "RESET";
  parentEl.append(button);
};

const setResetInput = (inputElements: HTMLInputElement[]) => {
  inputElements.forEach((item: HTMLInputElement, index: number) => {
    item.value = "";
  })
};

const handleResetButton = () => {
  const resetButton = document.querySelector(".btn--reset") as HTMLElement;

  resetButton.addEventListener("click", function() {
    setResetInput(formInputs);
  });
};

const keyDownInputs = (inputElements: HTMLInputElement[]) => {
  const resetButton = document.querySelector(".btn--reset") as HTMLElement;

  inputElements.forEach((item: HTMLInputElement, index: number) => {
    item.addEventListener("keydown", function() {
      // reset 버튼 지우기...................
    })
  })
}

const getSubmittedForm = (ele: any) => {
  ele.preventDefault();

  const RANGE_MAX : number = Number(rangeNumber?.value);
  const USER_NUMBER : number = Number(guessNumber?.value);
  const TARGET_NUMBER : number = Math.floor(Math.random() * RANGE_MAX);

  const formData : Casino = {
    range: RANGE_MAX,
    user : USER_NUMBER,
    target : TARGET_NUMBER,
  }

  // modal
  createModal(casinoForm.parentElement, formData);
  closeModal();

  // reset button
  createResetButton(casinoForm.parentElement);
  handleResetButton();
}

casinoForm?.addEventListener("submit", getSubmittedForm);

// challeng_04 (-ING)
const countdownEl = document.querySelector('.countdown') as HTMLElement;

const TARGET_DATE = countdownEl?.dataset.date;

const SECOND_IN_MS : number = 1000;
const MINUTE_IN_MS = SECOND_IN_MS * 60;
const HOUR_IN_MS = MINUTE_IN_MS * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;

const getCountDown = () => {
  const TODAY = +new Date();
  const TARGET = TARGET_DATE ? +new Date(TARGET_DATE) : TODAY; // TARGET_DATE가 null 이든 undefined 일때는 일단 default 값으로 TODAY로 설정함.........

  let diff : number;

  if (TARGET_DATE) {
    diff = TARGET - TODAY;
  }

}

getCountDown();
