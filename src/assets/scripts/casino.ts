export const casino = () => {
  const casinoForm = document.getElementById("casinoForm") as HTMLElement;
  const rangeNumber = document.getElementById("iptRange") as HTMLInputElement;
  const guessNumber = document.getElementById("iptGuess") as HTMLInputElement;

  const formInputs: HTMLInputElement[] = [rangeNumber, guessNumber];

  const div = document.createElement("div") as HTMLElement;
  const button = document.createElement("button") as HTMLElement;

  type Casino = {
    range: number;
    user: number;
    target: number;
  };

  const elementRemove = (ele: HTMLElement) => {
    ele.remove();
  };

  // modal
  const createModal = (parentEl: unknown, modalData: Casino) => {
    const WARNING_MESSAGE = `You must choose number under <strong>${modalData.range}</strong>`;
    const RESULT_MESSAGE = `
      You choose : <span id="userNumber">${modalData.user}</span>, <br />
      the machine choose : <span id="rndNumber">${
        modalData.target
      }</span> <br />
      <br />
      <strong id="resultMsg">
        ${
          modalData.user === modalData.target
            ? "You Win! 😎"
            : "You Lose..... 🙄"
        }
      </strong>
    `;

    div.classList.add("modal");

    div.innerHTML = `
      <div class="modal__inner">
        ${modalData.user > modalData.range ? WARNING_MESSAGE : RESULT_MESSAGE}
      </div>
    `;

    parentEl.append(div);
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal") as HTMLElement;

    modal?.addEventListener("click", function () {
      elementRemove(modal);
    });
  };

  // reset button
  const createResetButton = (parentEl: unknown) => {
    button.classList.add("btn--reset");
    button.textContent = "RESET";
    parentEl.append(button);
  };

  const setResetInput = (inputElements: HTMLInputElement[]) => {
    inputElements.forEach((item: HTMLInputElement) => {
      item.value = "";
    });
  };

  const handleResetButton = () => {
    const resetButton = document.querySelector(".btn--reset") as HTMLElement;

    resetButton.addEventListener("click", function () {
      setResetInput(formInputs);
    });
  };

  /* const keyDownInputs = (inputElements: HTMLInputElement[]) => {
    const resetButton = document.querySelector(".btn--reset") as HTMLElement;

    inputElements.forEach((item: HTMLInputElement) => {
      item.addEventListener("keydown", function () {
        // reset 버튼 지우기...................
      });
    });
  }; */

  const getSubmittedForm = (ele: unknown) => {
    ele.preventDefault();

    const RANGE_MAX: number = Number(rangeNumber?.value);
    const USER_NUMBER: number = Number(guessNumber?.value);
    const TARGET_NUMBER: number = Math.floor(Math.random() * RANGE_MAX);

    const formData: Casino = {
      range: RANGE_MAX,
      user: USER_NUMBER,
      target: TARGET_NUMBER,
    };

    // modal
    createModal(casinoForm.parentElement, formData);
    closeModal();

    // reset button
    createResetButton(casinoForm.parentElement);
    handleResetButton();
  };

  casinoForm?.addEventListener("submit", getSubmittedForm);
};
